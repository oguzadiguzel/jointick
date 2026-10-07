import { Menu } from 'lucide-react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  SideDialogContent,
} from '@/components/ui/dialog'
import { contactHref, primaryNav, sectionHref } from '@/lib/nav'
import { Wordmark } from '@/components/layout/Wordmark'

export function Header() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const earlyAccessHref = sectionHref(contactHref, pathname)
  const homeHref = pathname === '/' ? '#top' : '/'

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6 lg:px-8"
      >
        <a href={homeHref} className="rounded-sm">
          <span className="sr-only">Jointick home</span>
          <Wordmark />
        </a>

        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          {primaryNav.map((item) => (
            <a
              key={item.href}
              href={sectionHref(item.href, pathname)}
              className="rounded-sm text-sm font-medium text-muted-foreground transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={earlyAccessHref}
            className="hidden rounded-sm px-2 text-sm font-medium text-ink lg:inline"
          >
            Contact
          </a>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={earlyAccessHref}>Get Early Access</a>
          </Button>

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button type="button" variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu">
                <Menu className="size-5" />
              </Button>
            </DialogTrigger>
            <SideDialogContent>
              <DialogHeader className="pr-10">
                <DialogTitle>Menu</DialogTitle>
                <DialogDescription className="sr-only">Primary navigation</DialogDescription>
              </DialogHeader>
              <nav aria-label="Mobile" className="flex flex-col">
                {primaryNav.map((item) => (
                  <a
                    key={item.href}
                    href={sectionHref(item.href, pathname)}
                    onClick={() => setOpen(false)}
                    className="flex min-h-11 items-center rounded-md px-2 text-base font-medium text-ink hover:bg-paper"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3 border-t border-line pt-6">
                <a
                  href={earlyAccessHref}
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center rounded-md px-2 text-base font-medium text-ink hover:bg-paper"
                >
                  Contact
                </a>
                <Button asChild size="lg" className="w-full">
                  <a href={earlyAccessHref} onClick={() => setOpen(false)}>
                    Get Early Access
                  </a>
                </Button>
              </div>
            </SideDialogContent>
          </Dialog>
        </div>
      </nav>
    </header>
  )
}
