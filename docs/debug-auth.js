// Debug script to check Supabase user status
// Run this in browser console on the sign-in page

console.log('=== Supabase Auth Debug ===');

// Check if Supabase client is available
const supabase = window.supabase || null;
if (!supabase) {
  console.error('❌ Supabase client not found');
} else {
  console.log('✅ Supabase client found');
  
  // Check current session
  supabase.auth.getSession().then(({ data: { session }, error }) => {
    if (error) {
      console.error('❌ Session error:', error);
    } else if (session) {
      console.log('✅ Active session found:', {
        user: session.user.email,
        expires: new Date(session.expires_at * 1000),
        role: session.user.app_metadata?.role
      });
    } else {
      console.log('ℹ️ No active session');
    }
  });
  
  // Check current user
  supabase.auth.getUser().then(({ data: { user }, error }) => {
    if (error) {
      console.error('❌ User error:', error);
    } else if (user) {
      console.log('✅ User found:', {
        email: user.email,
        role: user.app_metadata?.role,
        lastSignIn: user.last_sign_in_at
      });
    } else {
      console.log('ℹ️ No user found');
    }
  });
}

console.log('=== End Debug ===');

