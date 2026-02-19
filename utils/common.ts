import { App_url } from "@/constant/static"
import { BreadcrumbItem } from "@/redux/modules/main/types"

// utils/breadcrumb.ts
const breadcrumbMap: Record<string, string> = {
    areas: "Gallery",
    property: "Property Detail",
}

export const generateBreadcrumbs = (
    pathname: string
): BreadcrumbItem[] => {
    const segments = pathname.split("/").filter(Boolean)

    let path = ""
    const crumbs: BreadcrumbItem[] = segments.map((segment) => {
        path += `/${segment}`

        return {
            label:
                breadcrumbMap[segment] ||
                segment
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (c) => c.toUpperCase()),
            href: path,
        }
    })

    return [
        { label: "Home", href: "/" },
        ...crumbs,
    ]
}


export const NAV_ITEMS = [
    {
        label: "Home",
        href: "/",
        // breadcrumbs: [{ label: "Home", href: "/" }],
    },
    {
        label: "Gallery",
        href: App_url.link.GALLERY,
        breadcrumbs: [
            { label: "Home", href: "/" },
            { label: "Gallery", href: App_url.link.GALLERY },
        ],
    },
    {
        label: "Car Rentals",
        href: App_url.link.CAR_RENTAL,
        breadcrumbs: [
            { label: "Home", href: "/" },
            { label: "Car Rentals", href: App_url.link.CAR_RENTAL },
        ],
    },
    {
        label: "About Us",
        href: App_url.link.ABOUT,
        breadcrumbs: [
            { label: "Home", href: "/" },
            { label: "About Zecco.es", href: App_url.link.ABOUT },
        ],
    },
    {
        label: "Packages",
        href: App_url.link.PACKAGE,
        breadcrumbs: [
            { label: "Home", href: "/" },
            { label: "Packages", href: App_url.link.PACKAGE },
        ],
    },
]





