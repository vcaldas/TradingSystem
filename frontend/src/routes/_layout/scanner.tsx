import { createFileRoute } from "@tanstack/react-router"

import useAuth from "@/hooks/useAuth"

export const Route = createFileRoute("/_layout/scanner")({
  component: Scanner,
  head: () => ({
    meta: [
      {
        title: "Scanner - FastAPI Template",
      },
    ],
  }),
})

function Scanner() {
  const { user: currentUser } = useAuth()

  return (
    <div>
      <div>
        <h1 className="text-2xl truncate max-w-sm">
          Hi, {currentUser?.full_name || currentUser?.email} 👋
        </h1>
        <p className="text-muted-foreground">
          Scanner page, nice to see you here!!!
        </p>
      </div>
    </div>
  )
}
