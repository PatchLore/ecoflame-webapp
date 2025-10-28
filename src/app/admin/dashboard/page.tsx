"use client";

import { useState, useEffect } from "react";
import { createSupabaseClient, Lead } from "@/lib/supabase-client";
import { useRouter } from "next/navigation";

interface DashboardLead extends Lead {
  status?: 'New' | 'Contacted' | 'Completed'
}

export default function AdminDashboard() {
  const router = useRouter();
  const supabase = createSupabaseClient();
  const [leads, setLeads] = useState<DashboardLead[]>([]);
  const [filteredLeads, setFilteredLeads] = useState<DashboardLead[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [serviceFilter, setServiceFilter] = useState<string>('all');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
    if (!supabase) {
      router.push('/admin/sign-in')
      return
    }

    const { data: { user }, error } = await supabase.auth.getUser()
    
    if (error || !user) {
      router.push('/admin/sign-in')
      return
    }

    if (user.app_metadata?.role !== 'admin') {
      router.push('/')
      return
    }

    setIsAuthenticated(true)
  }

  const fetchLeads = async () => {
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
        `"£${lead.estimated_quote}"`,
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
    if (supabase) {
      await supabase.auth.signOut()
    }
    router.push('/admin/sign-in')
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
      case 'New': return 'bg-orange-100 text-orange-800'
      case 'Contacted': return 'bg-yellow-100 text-yellow-800'
      case 'Completed': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'emergency': return 'bg-red-100 text-red-800'
      case 'urgent': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-green-100 text-green-800'
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0B2346] flex items-center justify-center">
        <div className="text-white text-lg">Loading dashboard...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0B2346] text-gray-100">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-[#0B2346] border-b border-gray-700 shadow-md">
        <h1 className="text-xl font-semibold flex items-center gap-2 text-white">
          <span role="img" aria-label="flame">🔥</span> EcoFlame Admin Panel
        </h1>
        <button
          onClick={handleLogout}
          className="text-sm bg-[#FF5C3A] px-3 py-1.5 rounded-md hover:bg-[#E14A25] transition"
        >
          Logout
        </button>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-1 text-white">
            Lead Dashboard
          </h2>
          <p className="text-sm text-gray-300">
            Manage and track your plumbing leads efficiently
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5 bg-[#001429] border border-gray-700 rounded-lg p-4 shadow-md">
          <input
            type="search"
            placeholder="Search leads..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-600 bg-[#0B2346] text-white rounded-md px-3 py-2 text-sm w-full sm:w-64 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF5C3A]"
          />

          <div className="flex flex-wrap gap-2">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border border-gray-600 bg-[#0B2346] text-white rounded-md px-2 py-1 text-sm focus:ring-2 focus:ring-[#FF5C3A]"
            >
              <option value="all">All Statuses</option>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Completed">Completed</option>
            </select>

            <select
              value={serviceFilter}
              onChange={(e) => setServiceFilter(e.target.value)}
              className="border border-gray-600 bg-[#0B2346] text-white rounded-md px-2 py-1 text-sm focus:ring-2 focus:ring-[#FF5C3A]"
            >
              <option value="all">All Services</option>
              <option value="emergency leak repair">Emergency Leak Repair</option>
              <option value="boiler service/repair">Boiler Service/Repair</option>
              <option value="toilet/tap installation">Toilet/Tap Installation</option>
              <option value="bathroom installation">Bathroom Installation</option>
              <option value="drain unblocking">Drain Unblocking</option>
              <option value="central heating work">Central Heating Work</option>
            </select>
          </div>

          <button 
            onClick={exportToCSV}
            className="bg-[#FF5C3A] text-white text-sm px-3 py-2 rounded-md hover:bg-[#E14A25] shadow-md transition"
          >
            Export CSV
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-gray-700 bg-white shadow-lg text-gray-800">
          {loading ? (
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#FF5C3A] mx-auto"></div>
              <p className="mt-2 text-gray-600">Loading leads...</p>
            </div>
          ) : filteredLeads.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-gray-600">No leads found</p>
            </div>
          ) : (
            <table className="min-w-full text-sm">
              <thead className="bg-gray-100 text-xs uppercase text-gray-600">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold">Contact</th>
                  <th className="px-3 py-2 text-left font-semibold">Service</th>
                  <th className="px-3 py-2 text-left font-semibold">Location</th>
                  <th className="px-3 py-2 text-left font-semibold">Quote</th>
                  <th className="px-3 py-2 text-left font-semibold">Status</th>
                  <th className="px-3 py-2 text-left font-semibold">Created</th>
                </tr>
              </thead>
              <tbody>
                {filteredLeads.map((lead) => (
                  <tr
                    key={lead.id}
                    className="border-t border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-3 py-2">
                      <div className="font-medium text-gray-900">{lead.name}</div>
                      <div className="text-gray-500 text-xs">{lead.email}</div>
                      <div className="text-gray-500 text-xs">{lead.phone}</div>
                    </td>
                    <td className="px-3 py-2">
                      <div className="capitalize">{lead.job_type}</div>
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getUrgencyColor(lead.urgency)}`}>
                        {lead.urgency.replace('_', ' ')}
                      </span>
                    </td>
                    <td className="px-3 py-2">{lead.postcode}</td>
                    <td className="px-3 py-2 font-medium">
                      £{lead.estimated_quote}
                    </td>
                    <td className="px-3 py-2">
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
                    <td className="px-3 py-2 text-gray-500 text-xs">
                      {formatDate(lead.created_at)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Summary */}
        <p className="text-sm text-gray-300 mt-4">
          {filteredLeads.length} lead{filteredLeads.length !== 1 && "s"} found
        </p>
      </main>
    </div>
  );
}