import { LogoGithub, LogoGmail, LogoWechat } from '@/components/common/svg-icons'
import { Cake, Link, Mail, MapPin, Phone } from 'lucide-react'

export function LinkIconComponent(icon: string) {
  const props = { width: '16px', height: '16px' }
  switch (icon) {
    case 'link':
      return <Link {...props} />
    case 'location':
      return <MapPin {...props} />
    case 'cake':
      return <Cake {...props} />
    case 'phone':
      return <Phone {...props} />
    case 'github':
      return <LogoGithub {...props} />
    case 'wechat':
      return <LogoWechat {...props} />
    case 'mail':
      return <Mail {...props} />
    case 'gmail':
      return <LogoGmail {...props} />
    default:
      return <Link {...props} />
  }
}
