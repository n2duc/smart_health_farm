"use client";

import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function LogoutButton() {
  const supabase = createClient();
  const router = useRouter();
  
  const logout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      toast.error(error.message);
    } else {
      router.refresh();
    }
  }

  return <Button variant="outline" size="sm" onClick={logout}>Logout</Button>;
}
