import { getLocationInquiryHref } from "./GlobalPresenceLocationPopup.helpers.js";
import {
  PopupCard,
  PopupDetail,
  PopupExternalLink,
  PopupInlineLink,
  PopupStoreList,
  PopupTitle,
} from "./GlobalPresenceLocationPopup.styles.js";

const GlobalPresenceLocationPopup = ({ location }) => (
  <PopupCard>
    <PopupTitle>{location.place}</PopupTitle>
    <PopupDetail>
      <strong>Status :</strong> <span>{location.status}</span>
    </PopupDetail>
    {location.storeLink && !location.stores?.length ? (
      <PopupDetail>
        <strong>Locations:</strong>{" "}
        <PopupExternalLink
          href={location.storeLink}
          rel="noreferrer"
          target="_blank"
        >
          View locations
        </PopupExternalLink>
      </PopupDetail>
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
    <PopupDetail>
      <strong>Next Territories:</strong>{" "}
      <PopupInlineLink to={getLocationInquiryHref(location)}>
        Inquire Within
      </PopupInlineLink>
    </PopupDetail>
  </PopupCard>
);

export default GlobalPresenceLocationPopup;

