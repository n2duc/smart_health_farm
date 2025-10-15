import { Clock, Facebook, Instagram, Mail, MapPin, PhoneCall, SendIcon, Youtube } from "lucide-react";
import Logo from "./logo";
import menu from "@/config/menu.json";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

interface SocialMediaItem {
  label: string;
  href: string;
  icon: string;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Facebook,
  Instagram,
  Youtube,
};

const resolveIcon = (iconName: string): React.ComponentType<{ className?: string }> => {
  return iconMap[iconName] || Facebook;
};

const transformSocialMediItem = (item: SocialMediaItem) => {
  return {
    ...item,
    icon: resolveIcon(item.icon),
  }
};

export default function SiteFooter() {
  const socialMedia = menu.socialMedia.map(transformSocialMediItem);
  return (
    <footer className="bg-secondary border-t">
      <div className="container mx-auto py-12 space-y-8">
        <div className="flex items-start gap-10">
          <div className="space-y-4 flex-2">
            <Logo />
            <p className="text-sm text-foreground">Kết nối trực tiếp từ trang trại 40ha tại Đà Lạt đến bàn ăn của bạn. Rau sạch, công nghệ AI, trải nghiệm hoàn hảo.</p>
            <div className="flex items-center gap-5">
              {socialMedia.map((item) => (
                <Link href={item.href} key={item.label} className="text-foreground p-2 rounded-full border hover:bg-primary hover:text-white">
                  <item.icon className="size-4 " />
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4 flex-1">
            <h3 className="text-base font-semibold text-primary">Liên kết nhanh</h3>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="/products" className="hover:text-primary">Sản phẩm</Link>
              </li>
              <li>
                <Link href="/farms">Trang trại</Link>
              </li>
              <li>
                <Link href="/recommendations">Tư vấn sức khỏe</Link>
              </li>
              <li>
                <Link href="/ai">Smart AI</Link>
              </li>
              <li>
                <Link href="/contact">Liên hệ</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4 flex-1">
            <h3 className="text-base font-semibold text-primary">Hỗ trợ</h3>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="/products" className="hover:text-primary">Trung tâm trợ giúp</Link>
              </li>
              <li>
                <Link href="/farms">Chính sách giao hàng</Link>
              </li>
              <li>
                <Link href="/recommendations">Đổi trả hàng</Link>
              </li>
              <li>
                <Link href="/ai">Chính sách bảo mật</Link>
              </li>
              <li>
                <Link href="/ai">Điều khoản sử dụng</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4 flex-2">
            <h3 className="text-base font-semibold text-primary">Nhận tin tức</h3>
            <p className="text-sm">Đăng ký để nhận thông tin về sản phẩm mới và ưu đãi đặc biệt.</p>
            <form className="flex items-center gap-2">
              <Input type="email" placeholder="Email" />
              <Button size="icon">
                <SendIcon className="size-4" />
              </Button>
            </form>
          </div>

        </div>
        <Separator />
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center size-10 bg-primary">
              <PhoneCall className="size-5 text-white" />
            </div>
            <div>
              <h4 className="text-base font-medium text-primary">Hotline</h4>
              <p className="text-sm">+84 909 090 909</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center size-10 bg-primary">
              <Mail className="size-5 text-white" />
            </div>
            <div>
              <h4 className="text-base font-medium text-primary">Email</h4>
              <p className="text-sm">support@gowafood.vn</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center size-10 bg-primary">
              <MapPin className="size-5 text-white" />
            </div>
            <div>
              <h4 className="text-base font-medium text-primary">Địa chỉ</h4>
              <p className="text-sm">Đà Lạt, Lâm Đồng</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center size-10 bg-primary">
              <Clock className="size-5 text-white" />
            </div>
            <div>
              <h4 className="text-base font-medium text-primary">Thời gian làm việc</h4>
              <p className="text-sm">Thứ Hai - Thứ Sáu: 8:00 - 17:00</p>
            </div>
          </div>
        </div>
        <Separator />
        <div className="text-sm flex items-center justify-between">
          <p>© 2024 GOWA FOOD. Tất cả quyền được bảo lưu.</p>
          <p>Được phát triển với ❤️ tại Việt Nam</p>
        </div>
      </div>
    </footer>
  )
}
