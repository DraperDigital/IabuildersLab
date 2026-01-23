"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"

export default function AdminSettingsPage() {
    return (
        <div className="space-y-6 max-w-3xl">
            <div>
                <h1 className="text-3xl font-bold">Settings</h1>
                <p className="text-muted-foreground">Manage application configuration.</p>
            </div>

            <Separator />

            <div className="space-y-6">
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold">General</h2>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="site-name">Site Name</Label>
                            <Input id="site-name" defaultValue="IA Builders Vault" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="admin-email">Admin Email</Label>
                            <Input id="admin-email" defaultValue="admin@example.com" />
                        </div>
                    </div>
                </div>

                <Separator />

                <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Feature Flags</h2>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between rounded-lg border p-4">
                            <div className="space-y-0.5">
                                <Label className="text-base">Maintenance Mode</Label>
                                <p className="text-sm text-muted-foreground">Disable public access to the site.</p>
                            </div>
                            <Switch />
                        </div>
                        <div className="flex items-center justify-between rounded-lg border p-4">
                            <div className="space-y-0.5">
                                <Label className="text-base">User Registration</Label>
                                <p className="text-sm text-muted-foreground">Allow new users to sign up.</p>
                            </div>
                            <Switch defaultChecked />
                        </div>
                    </div>
                </div>

                <div className="flex justify-end">
                    <Button>Save Changes</Button>
                </div>
            </div>
        </div>
    )
}
