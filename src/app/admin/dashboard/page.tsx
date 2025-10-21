'use client'

import { useState, useEffect } from 'react'
import { createSupabaseClient, Lead } from '@/lib/supabase-client'
import { 
  Search, 
  Download, 
  LogOut, 
  LayoutDashboard,
  Phone,
  Mail,
  MapPin,
  Clock,
  User
} from 'lucide-react'

interface DashboardLead extends Lead {
  status?: 'New' | 'Contacted' | 'Completed'
}

export default function AdminDashboard() {
  const [leads, setLeads] = useState<DashboardLead[]>([])
  const [filteredLeads, setFilteredLeads] = useState<DashboardLead[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')
  const [serviceFilter, setServiceFilter] = useState<string>('all')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    checkAuth()
  }, [])

  useEffect(() => {
    if (isAuthenticated) {
      fetchLeads()
    }
  }, [isAuthenticated])

  useEffect(() => {
    filterLeads()
  }, [leads, searchTerm, statusFilter, serviceFilter]) // eslint-disable-line react-hooks/exhaustive-deps

  const checkAuth = async () => {
    const supabase = createSupabaseClient()
    if (!supabase) {
      window.location.href = '/admin/sign-in'
      return
    }

    const { data: { user }, error } = await supabase.auth.getUser()
    
    if (error || !user) {
      window.location.href = '/admin/sign-in'
      return
    }

    setIsAuthenticated(true)
  }

  const fetchLeads = async () => {
    const supabase = createSupabaseClient()
    if (!supabase) {
      console.log('No Supabase client available')
      setLoading(false)
      return
    }

    console.log('Fetching leads from Supabase...')
    
    try {
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false })

      console.log('Supabase response:', { data, error })

      if (error) {
        console.error('Error fetching leads:', error)
        setLoading(false)
        return
      }

      console.log('Raw leads data:', data)
      console.log('Number of leads:', data?.length || 0)

      // Add default status if not present
      const leadsWithStatus = (data || []).map(lead => ({
        ...lead,
        status: lead.status || 'New'
      }))

      console.log('Processed leads:', leadsWithStatus)
      setLeads(leadsWithStatus)
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  const filterLeads = () => {
    let filtered = [...leads]

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(lead => 
        lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.postcode.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(lead => lead.status === statusFilter)
    }

    // Service filter
    if (serviceFilter !== 'all') {
      filtered = filtered.filter(lead => lead.job_type === serviceFilter)
    }

    setFilteredLeads(filtered)
  }

  const updateLeadStatus = async (leadId: string, newStatus: string) => {
    const supabase = createSupabaseClient()
    if (!supabase) return

    try {
      const { error } = await supabase
        .from('leads')
        .update({ status: newStatus })
        .eq('id', leadId)

      if (error) {
        console.error('Error updating lead:', error)
        return
      }

      // Update local state
      setLeads(leads.map(lead => 
        lead.id === leadId ? { ...lead, status: newStatus as 'New' | 'Contacted' | 'Completed' } : lead
      ))
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Phone', 'Service Type', 'Postcode', 'Urgency', 'Quote Total', 'Status', 'Created At']
    const csvContent = [
      headers.join(','),
      ...filteredLeads.map(lead => [
        `"${lead.name}"`,
        `"${lead.email}"`,
        `"${lead.phone}"`,
        `"${lead.job_type}"`,
        `"${lead.postcode}"`,
        `"${lead.urgency}"`,
        `"${lead.estimated_quote ? `£${lead.estimated_quote}` : 'Contact for quote'}"`,
        `"${lead.status || 'New'}"`,
        `"${new Date(lead.created_at).toLocaleDateString()}"`
      ].join(','))
    ].join('\n')

    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `leads-${new Date().toISOString().split('T')[0]}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const handleLogout = async () => {
    const supabase = createSupabaseClient()
    if (supabase) {
      await supabase.auth.signOut()
    }
    window.location.href = '/admin/sign-in'
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New': return 'bg-blue-100 text-blue-800'
      case 'Contacted': return 'bg-yellow-100 text-yellow-800'
      case 'Completed': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'emergency': return 'bg-red-100 text-red-800'
      case 'same_day': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-green-100 text-green-800'
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
        <div className="p-6">
          <div className="flex items-center gap-2">
            <div className="w-[30px] h-[30px] bg-gradient-to-br from-[#FF6B35] to-[#E63946] rounded-[50%_50%_0_50%]"></div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#E63946] bg-clip-text text-transparent">Eco Flame</h1>
          </div>
        </div>
        
        <nav className="mt-8">
          <div className="px-6">
            <div className="flex items-center px-3 py-2 text-orange-600 bg-orange-50 rounded-lg">
              <LayoutDashboard className="h-5 w-5 mr-3" />
              Dashboard
            </div>
          </div>
        </nav>

        <div className="absolute bottom-6 left-6 right-6">
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-3 py-2 text-gray-600 hover:text-red-600 transition-colors"
          >
            <LogOut className="h-5 w-5 mr-3" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64">
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Lead Dashboard</h1>
              <p className="text-gray-600 mt-2">Manage and track your plumbing leads</p>
            </div>
            <button
              onClick={exportToCSV}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </button>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search leads..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Status Filter */}
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Statuses</option>
                <option value="New">New</option>
                <option value="Contacted">Contacted</option>
                <option value="Completed">Completed</option>
              </select>

              {/* Service Filter */}
              <select
                value={serviceFilter}
                onChange={(e) => setServiceFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Services</option>
                <option value="emergency leak repair">Emergency Leak Repair</option>
                <option value="boiler service/repair">Boiler Service/Repair</option>
                <option value="toilet/tap installation">Toilet/Tap Installation</option>
                <option value="bathroom installation">Bathroom Installation</option>
                <option value="drain unblocking">Drain Unblocking</option>
                <option value="central heating work">Central Heating Work</option>
              </select>

              {/* Results Count */}
              <div className="flex items-center text-gray-600">
                <span>{filteredLeads.length} leads found</span>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            {loading ? (
              <div className="p-8 text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                <p className="mt-2 text-gray-600">Loading leads...</p>
              </div>
            ) : filteredLeads.length === 0 ? (
              <div className="p-8 text-center">
                <User className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600">No leads found</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Contact
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Service
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Location
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Quote
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Created
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredLeads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{lead.name}</div>
                            <div className="text-sm text-gray-500 flex items-center">
                              <Mail className="h-3 w-3 mr-1" />
                              {lead.email}
                            </div>
                            <div className="text-sm text-gray-500 flex items-center">
                              <Phone className="h-3 w-3 mr-1" />
                              {lead.phone}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{lead.job_type}</div>
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getUrgencyColor(lead.urgency)}`}>
                              {lead.urgency.replace('_', ' ')}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900 flex items-center">
                            <MapPin className="h-3 w-3 mr-1" />
                            {lead.postcode}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            {lead.estimated_quote ? `£${lead.estimated_quote}` : 'Contact for quote'}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <select
                            value={lead.status || 'New'}
                            onChange={(e) => updateLeadStatus(lead.id, e.target.value)}
                            className={`text-xs font-semibold rounded-full px-2 py-1 border-0 ${getStatusColor(lead.status || 'New')}`}
                          >
                            <option value="New">New</option>
                            <option value="Contacted">Contacted</option>
                            <option value="Completed">Completed</option>
                          </select>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {formatDate(lead.created_at)}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
