import { X } from "lucide-react";

import {
  PopupCard,
  PopupCloseButton,
  PopupExternalLink,
  PopupHeader,
  PopupStoreList,
  PopupTitle,
} from "./GlobalPresenceLocationPopup.styles.js";

const GlobalPresenceLocationPopup = ({ location, onClose }) => (
  <PopupCard>
    <PopupHeader>
      <PopupTitle>{location.place}</PopupTitle>
      {onClose && (
        <PopupCloseButton type="button" onClick={onClose} aria-label="Close location popup">
          <X size={14} />
        </PopupCloseButton>
      )}
    </PopupHeader>
    {location.storeLink && !location.stores?.length ? (
      <PopupExternalLink
        href={location.storeLink}
        rel="noreferrer"
        target="_blank"
      >
        View locations
      </PopupExternalLink>
    ) : null}
    {location.stores?.length ? (
      <PopupStoreList>
        {location.stores.map((store) => (
          <PopupExternalLink
            key={store.label}
            href={store.url}
            rel="noreferrer"
            target="_blank"
          >
            {store.label}
          </PopupExternalLink>
        ))}
      </PopupStoreList>
    ) : null}
  </PopupCard>
);

export default GlobalPresenceLocationPopup;




