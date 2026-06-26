"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";

export default function AppAccountPage() {
    const t = useTranslations('AppAccount');

    return (
        <div className="space-y-6 max-w-3xl">
            <div>
                <h1 className="text-3xl font-bold">{t('title')}</h1>
                <p className="text-muted-foreground">{t('subtitle')}</p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>{t('profileTitle')}</CardTitle>
                    <CardDescription>{t('profileDesc')}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">{t('fullName')}</Label>
                        <Input id="name" defaultValue="Guest User" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">{t('email')}</Label>
                        <Input id="email" type="email" defaultValue="guest@example.com" />
                    </div>
                    <Button>{t('saveChanges')}</Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>{t('subscriptionTitle')}</CardTitle>
                    <CardDescription>{t('subscriptionDesc')}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-semibold">{t('currentPlan')}</p>
                            <p className="text-sm text-muted-foreground">Access - $29/month</p>
                        </div>
                        <Badge>{t('active')}</Badge>
                    </div>
                    <Separator />
                    <div className="flex gap-4">
                        <Button variant="outline">{t('changePlan')}</Button>
                        <Button variant="destructive">{t('cancelSubscription')}</Button>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>{t('dangerZone')}</CardTitle>
                    <CardDescription>{t('dangerZoneDesc')}</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button variant="destructive">{t('deleteAccount')}</Button>
                </CardContent>
            </Card>
        </div>
    );
}
