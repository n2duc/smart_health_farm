import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import { LoginForm, RegisterForm } from "../auth";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../animate-ui/components/radix/dialog";
import Logo from "./logo";
import Link from "next/link";

interface AuthDialogProps {
  isOpen: boolean;
  onClose: () => void;
  mode: "login" | "register";
  onModeChange: (mode: "login" | "register") => void;
}

export default function AuthDialog({ isOpen, onClose, mode, onModeChange }: AuthDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader className="text-center">
          <div className="flex justify-center mb-5">
            <Logo />
          </div>
          <DialogTitle className="text-2xl font-bold">Chào mừng đến với GOWA FOOD</DialogTitle>
          <DialogDescription>Kết nối trực tiếp từ trang trại đến bàn ăn của bạn</DialogDescription>
        </DialogHeader>

        <Tabs value={mode} onValueChange={(value) => onModeChange(value as "login" | "register")}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Đăng nhập</TabsTrigger>
            <TabsTrigger value="register">Đăng ký</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <LoginForm />
          </TabsContent>

          <TabsContent value="register">
            <RegisterForm />
          </TabsContent>
        </Tabs>

        <div className="text-center text-sm text-muted-foreground">
          Bằng cách {mode === "register" ? "đăng ký" : "đăng nhập"}, bạn đồng ý với{" "}
          <Link href="/terms" className="p-0 h-auto text-sm">
            Điều khoản sử dụng
          </Link>{" "}
          và{" "}
          <Link href="/privacy" className="p-0 h-auto text-sm">
            Chính sách bảo mật
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  )
}
