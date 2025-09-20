import clsx from "clsx";
import { b as button, h as heading } from "../../chunks/theme.js";
import { b as spread_attributes, c as clsx$1, d as element, f as ensure_array_like, a as attr_class, g as attr, h as bind_props } from "../../chunks/index2.js";
import { W as getContext, X as escape_html, Z as fallback } from "../../chunks/context.js";
function getTheme(componentKey) {
  const theme = getContext("theme");
  return theme?.[componentKey];
}
function Button($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const group = getContext("group");
    const ctxDisabled = getContext("disabled");
    let {
      children,
      pill,
      outline = false,
      size = "md",
      color,
      shadow = false,
      tag = "button",
      disabled,
      loading = false,
      class: className,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const theme = getTheme("button");
    let actualSize = group ? "sm" : size;
    let actualColor = color ?? (group ? outline ? "dark" : "alternative" : "primary");
    let isDisabled = Boolean(ctxDisabled) || Boolean(disabled) || loading;
    const { base, outline: outline_, shadow: shadow_ } = button({
      color: actualColor,
      size: actualSize,
      disabled: isDisabled,
      pill,
      group: !!group
    });
    let btnCls = base({
      class: clsx(outline && outline_(), shadow && shadow_(), theme?.base, className)
    });
    if (restProps.href !== void 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<a${spread_attributes({ ...restProps, class: clsx$1(btnCls) }, null)}>`);
      children?.($$renderer2);
      $$renderer2.push(`<!----></a>`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (tag === "button") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<button${spread_attributes(
          {
            type: "button",
            ...restProps,
            class: clsx$1(btnCls),
            disabled: isDisabled
          },
          null
        )}>`);
        children?.($$renderer2);
        $$renderer2.push(`<!----> `);
        if (loading) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<svg class="ml-2 h-4 w-4 animate-spin text-white" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></button>`);
      } else {
        $$renderer2.push("<!--[!-->");
        element(
          $$renderer2,
          tag,
          () => {
            $$renderer2.push(`${spread_attributes({ ...restProps, class: clsx$1(btnCls) }, null)}`);
          },
          () => {
            children?.($$renderer2);
            $$renderer2.push(`<!---->`);
          }
        );
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Heading($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      children,
      tag = "h1",
      class: className,
      $$slots,
      $$events,
      ...restProps
    } = $$props;
    const theme = getTheme("heading");
    let headingCls = heading({ tag, class: clsx(theme, className) });
    element(
      $$renderer2,
      tag,
      () => {
        $$renderer2.push(`${spread_attributes({ ...restProps, class: clsx$1(headingCls) }, null)}`);
      },
      () => {
        children($$renderer2);
        $$renderer2.push(`<!---->`);
      }
    );
  });
}
function ModelPreview($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let services = fallback(
      $$props["services"],
      () => [
        { src: "/models/i7.webp", alt: "i7 m70", label: "i7" },
        { src: "/models/340i.webp", alt: "340i", label: "M340i" },
        { src: "/models/m3.webp", alt: "m3 g80", label: "M3" },
        { src: "/models/x7.webp", alt: "x7", label: "X7" }
      ],
      true
    );
    let hoveredIndex = -1;
    $$renderer2.push(`<div class="flex justify-center items-center mt-5 my-15 w-10/12 overflow-hidden transform skew-x-[7deg] svelte-1pq3mcf"><!--[-->`);
    const each_array = ensure_array_like(services);
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let service = each_array[index];
      $$renderer2.push(`<div${attr_class(`relative flex-1 transition-all duration-1000 ease-in-out h-[75vmin] ${hoveredIndex === index ? "flex-[3]" : ""} ${index < services.length - 1 ? "mr-4" : ""}`, "svelte-1pq3mcf")} role="button" tabindex="0" aria-label="Example BMW Models"><img${attr("src", service.src)}${attr("alt", service.alt)} class="w-12/12 h-full object-cover duration-400 ease-in-out grayscale-[100%] hover:grayscale-0 svelte-1pq3mcf" loading="lazy"/> <div${attr_class(`absolute bottom-0 left-0 w-full p-2 text-center whitespace-nowrap transition-all duration-600 -skew-x-[7deg] ease-in-out ${hoveredIndex === index ? "top-[calc(100%-2em)] text-white text-2xl" : "text-sm"} `)}>${escape_html(service.label)}</div></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    bind_props($$props, { services });
  });
}
function _page($$renderer) {
  $$renderer.push(`<main class="flex flex-col items-center justify-center pt-12 pb-24 px-4"><img src="/logo.svg" alt="BMW" class="h-20 sm:h-20 mb-6"/> `);
  Heading($$renderer, {
    tag: "h1",
    class: "mb-4 text-2xl font-normal text-center",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Die digitale BMW Autowelt`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Heading($$renderer, {
    tag: "h2",
    class: "mb-4 text-xl font-normal text-center",
    children: ($$renderer2) => {
      $$renderer2.push(`<!---->Konfiguriere jetzt deinen einzigartigen BMW!`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  Button($$renderer, {
    href: "/models",
    color: "alternative",
    pill: true,
    class: "group inline-flex items-center justify-center px-6 py-4 transition-all duration-200 border\n            border-current hover:border-transparent hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-[#B0AD9E]\n            text-current",
    children: ($$renderer2) => {
      $$renderer2.push(`<span class="transition-all duration-200 ease-in-out group-hover:mr-2 group-hover:text-[#B0AD9E] text-current">Jetzt konfigurieren</span> <span aria-hidden="true" class="overflow-hidden w-0 transition-all duration-200 ease-in-out group-hover:w-4 group-hover:text-[#B0AD9E] text-current">></span>`);
    },
    $$slots: { default: true }
  });
  $$renderer.push(`<!----> `);
  ModelPreview($$renderer, {});
  $$renderer.push(`<!----></main>`);
}
export {
  _page as default
};
