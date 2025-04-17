import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
// Import the Phosphor Icon
import { cn } from "@/lib/utils"; // Shadcn utility for class names
import { motion } from "motion/react";
import * as React from "react";
import { Link } from "react-router"; // Or your framework's Link component, or 'a'

// Import or define navigationData and MenuItemData type here
// const navigationData: MenuItemData[] = [ ... ]; (from previous step)
interface MenuItemData {
  id: string;
  label: string;
  link: string;
  children?: MenuItemData[];
}
// Assume navigationData is defined or imported here

// Reusable ListItem component (same as before)
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { title: string }
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        {/* Use appropriate Link or 'a' tag */}
        <Link
          to={href || "#"}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-navbar-background hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          )}
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function SiteNavigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {navigationData.map((item) =>
          item.children && item.children.length > 0 ? (
            // Item WITH Children (Dropdown)
            <NavigationMenuItem key={item.id}>
              {/* Added 'group' className for Radix state targeting */}
              <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
              <NavigationMenuContent className="">
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] rtl:text-right ltr:text-left  ">
                  {item.children.map((child) =>
                    // Handle nested children (like "تشكيلة السلطة")
                    child.children && child.children.length > 0 ? (
                      <React.Fragment key={child.id}>
                        {/* Optional: Sub-category title */}
                        {/* <li className="row-span-1 md:col-span-2">
                          <div className="p-3 text-sm font-semibold text-foreground">
                            {child.label}
                          </div>
                        </li> */}
                        {child.children.map((grandChild) => (
                          <ListItem
                            key={grandChild.id}
                            title={grandChild.label}
                            href={grandChild.link}
                          />
                        ))}
                      </React.Fragment>
                    ) : (
                      // Render direct child items
                      <ListItem
                        key={child.id}
                        title={child.label}
                        href={child.link}
                      />
                    ),
                  )}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ) : (
            // Item WITHOUT Children (Simple Link)
            <NavigationMenuItem key={item.id}>
              <NavigationMenuLink
                asChild
                className={cn(navigationMenuTriggerStyle(), "bg-transparent")}
              >
                {/* Use appropriate Link or 'a' tag */}
                <Link to={item.link}>{item.label}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ),
        )}
      </NavigationMenuList>
      {/* Viewport is usually placed outside the list */}
      <NavigationMenuViewport />
    </NavigationMenu>
  );
}

// Assuming this is in the same file or imported
const navigationData = [
  {
    id: "menu-item-5090",
    label: "السلطـة",
    link: "#", // Top-level is often non-navigable directly if it has children
    children: [
      {
        id: "menu-item-5091",
        label: "تعريف السلطة",
        link: "https://ina-elections.dz/السلطة/",
        children: [],
      },
      {
        id: "menu-item-4953",
        label: "تشكيلة السلطة",
        link: "#", // This item itself also acts as a category label
        children: [
          {
            id: "menu-item-5573",
            label: "قائمة الأعضاء",
            link: "https://ina-elections.dz/الأعضاء/",
            children: [],
          },
          {
            id: "menu-item-5577",
            label: "قائمة المنسقين الولائيين",
            link: "https://ina-elections.dz/قائمة_المنسقين_الولائيين/",
            children: [],
          },
          {
            id: "menu-item-7400",
            label: "المندوبيات الولائية",
            link: "https://ina-elections.dz/المنسقيات-الولائية/",
            children: [],
          },
        ],
      },
      {
        id: "menu-item-5103",
        label: "الإطار القانوني للسلطة",
        link: "https://ina-elections.dz/الإطار-القانوني-للسلطة/",
        children: [],
      },
      {
        id: "menu-item-11725",
        label: "لجنة مراقبة تمويل الحملة الانتخابية",
        link: "https://ccfce.ina-elections.dz/",
        children: [],
      },
    ],
  },
  {
    id: "menu-item-5340",
    label: "النصوص القانونية",
    link: "#",
    children: [
      {
        id: "menu-item-5291",
        label: "الدستور",
        link: "https://ina-elections.dz/الدستور/",
        children: [],
      },
      {
        id: "menu-item-5307",
        label: "القوانين العضوية",
        link: "https://ina-elections.dz/القوانين-العضوية/",
        children: [],
      },
      {
        id: "menu-item-5652",
        label: "المراسيم",
        link: "https://ina-elections.dz/المراسيم/",
        children: [],
      },
      {
        id: "menu-item-11726",
        label: "قرارات",
        link: "https://ina-elections.dz/قرارات/",
        children: [],
      },
    ],
  },
  {
    id: "menu-item-5854",
    label: "الخدمات الالكترونية",
    link: "https://services.ina-elections.dz", // Link to the services portal itself
    children: [
      // Children link to specific services
      {
        id: "menu-item-6045",
        label: "حفاظ الأمانة",
        link: "https://services.ina-elections.dz/hofad_amana",
        children: [],
      },
      {
        id: "menu-item-6046",
        label: "أين أنتخب ؟",
        link: "https://services.ina-elections.dz/orientation",
        children: [],
      },
      {
        id: "menu-item-6047",
        label: "التسجيل لأول مرة في القوائم الإنتخابية",
        link: "https://services.ina-elections.dz/register",
        children: [],
      },
      {
        id: "menu-item-6735",
        label: "تغيير الإقامة",
        link: "https://services.ina-elections.dz/residence",
        children: [],
      },
      {
        id: "menu-item-6048",
        label: "طلب نسخة من بطاقة الناخب",
        link: "https://services.ina-elections.dz/duplicata",
        children: [],
      },
      {
        id: "menu-item-12801",
        label: "بوابة التوظيف",
        link: "https://tawdhif.ina-elections.dz/",
        children: [],
      },
    ],
  },
  {
    id: "menu-item-5777",
    label: "الإنتخابات",
    link: "https://ina-elections.dz/الإنتخابات/",
    children: [],
  },
  {
    id: "menu-item-6038",
    label: "المكتبة الإعلامية",
    link: "https://ina-elections.dz/المكتبة-الإعلامية/",
    children: [],
  },
  {
    id: "menu-item-16311",
    label: "النشاطات",
    link: "https://ina-elections.dz/نشاطات-السلطة-2024/",
    children: [],
  },
  {
    id: "menu-item-4677",
    label: "الإستقبال",
    link: "https://ina-elections.dz/",
    children: [],
  },
];

// Define the type for better autocompletion and type safety
interface MenuItemData {
  id: string;
  label: string;
  link: string;
  children?: MenuItemData[];
}
