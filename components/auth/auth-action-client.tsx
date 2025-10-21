"use client";

import { useState, useEffect } from "react";
import { User } from "lucide-react";
import { Button } from "../ui/button";
import AuthDialog from "../site/auth-dialog";
import { LogoutButton } from "./logout-button";
import { createClient } from "@/lib/supabase/client";

interface AuthActionClientProps {
  user: any;
}

export default function AuthActionClient({ user: initialUser }: AuthActionClientProps) {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const [user, setUser] = useState(initialUser);
  const supabase = createClient();

  useEffect(() => {
    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' || event === 'SIGNED_OUT') {
        setUser(session?.user ?? null);
        
        // Close dialog on successful login
        if (event === 'SIGNED_IN') {
          setIsAuthModalOpen(false);
        }
      }
    });

    return () => subscription.unsubscribe();
  }, [supabase.auth]);

  const handleToggleAuthModal = (mode: "login" | "register") => {
    setIsAuthModalOpen(true);
    setAuthMode(mode);
  };

  return (
    <>
      <div className="hidden md:flex items-center gap-2">
        {user ? (
          <div className="flex items-center gap-2">
            <span className="text-sm">{user.email?.split('@')[0]}</span>
            <LogoutButton />
          </div>
        ) : (
          <>
            <Button variant="outline" onClick={() => handleToggleAuthModal("login")}>
              <User /> <span className="hidden xl:inline">Đăng nhập</span>
            </Button>
            <Button onClick={() => handleToggleAuthModal("register")}>Đăng ký</Button>
          </>
        )}
      </div>
      
      <AuthDialog
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </>
  );
}
