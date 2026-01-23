"use client"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { updateUserRole } from "@/actions/users"
import { toast } from "sonner"
import { useState } from "react"
import { UserRole } from "@/types/content"

interface UserRoleSelectorProps {
    userId: string
    initialRole: UserRole
}

export function UserRoleSelector({ userId, initialRole }: UserRoleSelectorProps) {
    const [role, setRole] = useState<UserRole>(initialRole)
    const [isLoading, setIsLoading] = useState(false)

    const handleRoleChange = async (newRole: UserRole) => {
        setIsLoading(true)
        try {
            // Optimistic update
            setRole(newRole)

            const result = await updateUserRole(userId, newRole)

            if (result.error) {
                setRole(initialRole) // Revert
                toast.error("Failed to update role")
            } else {
                toast.success("Role updated successfully")
            }
        } catch (error) {
            setRole(initialRole)
            toast.error("An error occurred")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Select value={role} onValueChange={handleRoleChange} disabled={isLoading}>
            <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Role" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="member">Member</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
            </SelectContent>
        </Select>
    )
}
