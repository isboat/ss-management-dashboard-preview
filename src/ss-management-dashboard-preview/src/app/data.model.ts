export class PreviewDataResponse {
    displayName: string
    externalMediaSource: string
    tenantId: string
    id: string
    mediaAsset: MediaAsset
    mediaAssetEntityId: string
    menu: MenuModel
    menuEntityId: string
    templateKey: string
    templateProperties: TemplateProperty[]
}
export class TemplateProperty {
    key: string
    value: string
    label: string
}

export class MediaAsset {
    tenantId: string
    id: string
}

export class MenuModel {
    tenantId: string
    id: string
}