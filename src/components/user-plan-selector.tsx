"use client"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { updateUserPlan } from "@/actions/users"
import { toast } from "sonner"
import { useState } from "react"
import { SubscriptionPlan } from "@/types/content"

interface UserPlanSelectorProps {
    userId: string
    initialPlan: SubscriptionPlan
}

export function UserPlanSelector({ userId, initialPlan }: UserPlanSelectorProps) {
    const [plan, setPlan] = useState<SubscriptionPlan>(initialPlan)
    const [isLoading, setIsLoading] = useState(false)

    const handlePlanChange = async (newPlan: SubscriptionPlan) => {
        setIsLoading(true)
        try {
            setPlan(newPlan)
            const result = await updateUserPlan(userId, newPlan)

            if (result.error) {
                setPlan(initialPlan)
                toast.error("Failed to update plan")
            } else {
                toast.success("Plan updated successfully")
            }
        } catch (error) {
            setPlan(initialPlan)
            toast.error("An error occurred")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Select value={plan} onValueChange={handlePlanChange} disabled={isLoading}>
            <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Plan" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="access">Access</SelectItem>
                <SelectItem value="plus">Plus</SelectItem>
                <SelectItem value="pro">Pro</SelectItem>
            </SelectContent>
        </Select>
    )
}
