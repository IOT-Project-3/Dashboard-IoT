import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.jsx";

function DropDownMoisGraph({ nom, data, getDataFromHardData }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className={
            "h-9 px-4 py-2 has-[>svg]:px-3 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50"
          }
        >
          {data[3] + " - " + data[2]}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-16" align="start">
        {data[0].map((key) => {
          return (
            <div key={key + "-div"}>
              <DropdownMenuLabel key={key + "-label"}>{key}</DropdownMenuLabel>
              <DropdownMenuGroup key={key + "-group"}>
                {data[1][key].map((mois) => {
                  if (parseInt(data[2]) === parseInt(key) && data[3] === mois) {
                    return "";
                  } else {
                    return (
                      <DropdownMenuItem
                        onClick={async () =>
                          getDataFromHardData(nom, key, mois)
                        }
                        key={key + "-" + mois}
                      >
                        {mois}
                      </DropdownMenuItem>
                    );
                  }
                })}
              </DropdownMenuGroup>
              {data[0][data[0].length - 1] !== key ? (
                <DropdownMenuSeparator />
              ) : (
                ""
              )}
            </div>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropDownMoisGraph;
