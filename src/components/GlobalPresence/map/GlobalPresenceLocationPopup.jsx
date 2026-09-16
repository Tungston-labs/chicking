import { X } from "lucide-react";

import {
  PopupCard,
  PopupCloseButton,
  PopupExternalLink,
  PopupHeader,
  PopupStoreList,
  PopupTitle,
} from "./GlobalPresenceLocationPopup.styles.js";

const GlobalPresenceLocationPopup = ({ location, statusInfo, onClose, onMouseEnter, onMouseLeave }) => (
  <PopupCard onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
    <PopupHeader>
      <PopupTitle>{location.place || location.country}</PopupTitle>
      {onClose && (
        <PopupCloseButton type="button" onClick={onClose} aria-label="Close location popup">
          <X size={14} />
        </PopupCloseButton>
      )}
    </PopupHeader>
    {statusInfo ? (
      <div style={{ padding: "0.4rem 0", fontSize: "0.825rem", color: "#2d3748", lineHeight: "1.4" }}>
        <div><strong>Country:</strong> {statusInfo.country}</div>
        <div><strong>Status:</strong> {statusInfo.status}</div>
        <div><strong>Next Territories:</strong> {statusInfo.nextTerritories}</div>
      </div>
    ) : null}
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




