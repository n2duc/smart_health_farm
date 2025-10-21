import Logo from "./logo";
import SiteHeaderClient from "./site-header-client";
import { createClient } from "@/lib/supabase/server";

export default async function SiteHeader() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();
  const user = data?.claims;

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b">
      <div className="container mx-auto flex h-(--header-height) items-center justify-between gap-2 **:data-[slot=separator]:!h-4 px-3 lg:px-0">
        <Logo />
        <SiteHeaderClient user={user} />
      </div>
    </header>
  );
}
