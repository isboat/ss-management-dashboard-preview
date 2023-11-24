export class PreviewDataResponse {
    displayName: string
    externalMediaSource: string
    tenantId: string
    id: string
    mediaAsset: MediaAsset
    mediaAssetEntityId: string
    menu: MenuModel
    menuEntityId: string
    layout: LayoutModel
    checksum: string
}
export class TemplateProperty {
    key: string
    value: string
    label: string
}

export class MediaAsset {
    tenantId: string
    id: string
    assetUrl: string
    type: number // 1=image, 2=video
}

export class MenuModel {
    tenantId: string
    id: string
    description: string
    title: string
    currency: string
    iconUrl: string
    menuItems: MenuItem[]
}

export class LayoutModel
{
    id: string;
    templateKey: string;
    templateProperties: TemplateProperty[];
    menuSubType: string;
}

export class MenuItem {
    tenantId: string
    id: string
    iconUrl: string
    name: string
    price: string
    title: string
    description: string
}