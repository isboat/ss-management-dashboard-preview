# OnScreenSync screen preview

This browser app renders a selected OnScreenSync screen so a dashboard user can review the composition before publishing it or checking it on a TV. The dashboard handles editing and publishing, and the TV players handle live playback.

## What it shows

- A full-screen image, looping video, or supported external media embed.
- A menu on its own, or a vertically split layout with the menu above or below media.
- A live date and time presentation based on the screen layout.

The dashboard launches the preview with a screen identifier and an authenticated session token. The app fetches the corresponding preview data and selects the matching layout.

## How it is organised

The Angular application is under [src/ss-management-dashboard-preview](../src/ss-management-dashboard-preview). The root component reads the preview request and loads its data. [Template components](../src/ss-management-dashboard-preview/src/app/templates) render the supported layouts. A data model describes the preview response, and environment files select the API address.

## What it relies on

- **Management Dashboard UI** launches the preview. The **Management Dashboard API** returns the authenticated preview data, including the layout and which assets it references.
- **Media origins** serve the referenced images, videos, and embeddable content. Browser playback and embedding rules apply to those sources.
- **Angular 16** provides the app shell, routing, and HTTP client. Bootstrap and ng-bootstrap supply presentation components. Angular CLI builds the browser bundle.
