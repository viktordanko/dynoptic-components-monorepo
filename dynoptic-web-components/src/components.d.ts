/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface DynoProductItem {
        "label": string;
        "slug": string;
    }
    interface DynoProductList {
        "data": any;
        "name": string;
        "query": any;
        "tenant": string;
    }
    interface DynoProductListById {
        "data": any;
        "name": string;
        "tenant": string;
        "variables": any;
    }
    interface DynoProductListByName {
        "data": any;
        "name": string;
        "tenant": string;
        "variables": any;
    }
}
declare global {
    interface HTMLDynoProductItemElement extends Components.DynoProductItem, HTMLStencilElement {
    }
    var HTMLDynoProductItemElement: {
        prototype: HTMLDynoProductItemElement;
        new (): HTMLDynoProductItemElement;
    };
    interface HTMLDynoProductListElement extends Components.DynoProductList, HTMLStencilElement {
    }
    var HTMLDynoProductListElement: {
        prototype: HTMLDynoProductListElement;
        new (): HTMLDynoProductListElement;
    };
    interface HTMLDynoProductListByIdElement extends Components.DynoProductListById, HTMLStencilElement {
    }
    var HTMLDynoProductListByIdElement: {
        prototype: HTMLDynoProductListByIdElement;
        new (): HTMLDynoProductListByIdElement;
    };
    interface HTMLDynoProductListByNameElement extends Components.DynoProductListByName, HTMLStencilElement {
    }
    var HTMLDynoProductListByNameElement: {
        prototype: HTMLDynoProductListByNameElement;
        new (): HTMLDynoProductListByNameElement;
    };
    interface HTMLElementTagNameMap {
        "dyno-product-item": HTMLDynoProductItemElement;
        "dyno-product-list": HTMLDynoProductListElement;
        "dyno-product-list-by-id": HTMLDynoProductListByIdElement;
        "dyno-product-list-by-name": HTMLDynoProductListByNameElement;
    }
}
declare namespace LocalJSX {
    interface DynoProductItem {
        "label"?: string;
        "slug"?: string;
    }
    interface DynoProductList {
        "data"?: any;
        "name"?: string;
        "query"?: any;
        "tenant"?: string;
    }
    interface DynoProductListById {
        "data"?: any;
        "name"?: string;
        "tenant"?: string;
        "variables"?: any;
    }
    interface DynoProductListByName {
        "data"?: any;
        "name"?: string;
        "tenant"?: string;
        "variables"?: any;
    }
    interface IntrinsicElements {
        "dyno-product-item": DynoProductItem;
        "dyno-product-list": DynoProductList;
        "dyno-product-list-by-id": DynoProductListById;
        "dyno-product-list-by-name": DynoProductListByName;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "dyno-product-item": LocalJSX.DynoProductItem & JSXBase.HTMLAttributes<HTMLDynoProductItemElement>;
            "dyno-product-list": LocalJSX.DynoProductList & JSXBase.HTMLAttributes<HTMLDynoProductListElement>;
            "dyno-product-list-by-id": LocalJSX.DynoProductListById & JSXBase.HTMLAttributes<HTMLDynoProductListByIdElement>;
            "dyno-product-list-by-name": LocalJSX.DynoProductListByName & JSXBase.HTMLAttributes<HTMLDynoProductListByNameElement>;
        }
    }
}
