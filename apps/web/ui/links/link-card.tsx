import { CardList, useMediaQuery } from "@dub/ui";
import { useContext } from "react";
import { useAddEditLinkModal } from "../modals/add-edit-link-modal";
import { LinkDetailsColumn } from "./link-details-column";
import { LinkTitleColumn } from "./link-title-column";
import { LinksListContext, ResponseLink } from "./links-container";

export function LinkCard({ link }: { link: ResponseLink }) {
  const { isMobile } = useMediaQuery();

  const { showHoverStates } = useContext(LinksListContext);

  const { setShowAddEditLinkModal, AddEditLinkModal } = useAddEditLinkModal({
    props: link,
  });

  return (
    <>
      <AddEditLinkModal />
      <CardList.Card
        key={link.id}
        onClick={isMobile ? undefined : () => setShowAddEditLinkModal(true)}
        innerClassName="flex items-center gap-5 sm:gap-8 md:gap-12 text-sm"
        hoverStateEnabled={showHoverStates}
      >
        <div className="min-w-0 grow">
          <LinkTitleColumn link={link} />
        </div>
        <LinkDetailsColumn link={link} />
      </CardList.Card>
    </>
  );
}
