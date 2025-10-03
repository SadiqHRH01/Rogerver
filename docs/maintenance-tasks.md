# Maintenance Tasks

The following issues were identified while reviewing the project. Each item includes the observed problem and a proposed follow-up task.

## Typo Fix
- **Issue**: The hero paragraph on the home page includes a double period in the phrase "health and freedom causes..", which appears in the rendered text.
- **Proposed Task**: Remove the duplicated punctuation in `src/App.tsx` to ensure the copy reads naturally.

## Bug Fix
- **Issue**: `galleryImages` in `src/data.ts` prefixes every file with `/public/`, but Vite serves assets from `/images/...`. The existing paths therefore fail to resolve, leaving the gallery empty.
- **Proposed Task**: Update the gallery image paths to reference `/images/...` so `SimplePhotoGallery` renders the photos correctly.

## Documentation/Comment Correction
- **Issue**: `src/aboutRoger.tsx` still contains the scaffold comment "// <-- replace with your image path" even though the image path is already finalized. The outdated note is confusing during maintenance.
- **Proposed Task**: Remove or rewrite the comment to reflect that the component already uses the intended asset.

## Test Improvement
- **Issue**: The navigation logic in `src/main.tsx` manages hash-based scrolling, but no automated test exercises this behavior.
- **Proposed Task**: Add a React Testing Library test that mounts the exported `App` component and verifies that invoking the `navigate` callback with a hash triggers `scrollIntoView` and resets the stored hash.
