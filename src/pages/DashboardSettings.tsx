import { Settings } from "lucide-react";

const DashboardSettings = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-bold mb-1">Settings</h1>
      <p className="text-sm text-muted-foreground">Manage your account and preferences.</p>
    </div>
    <div className="glass-card p-8 text-center">
      <Settings className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
      <p className="text-muted-foreground">Settings panel coming soon.</p>
    </div>
  </div>
);

export default DashboardSettings;
