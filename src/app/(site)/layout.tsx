import { Layout } from '@/components/Layout';
import WelcomePopup from '@/components/WelcomePopup';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return <Layout>
    {children}
    
    <WelcomePopup />
    </Layout>;
}