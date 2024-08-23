import { ReactNode, useState } from "react";

export interface AccordianItemProps {
    id: string,
    summary: string;
    children: ReactNode;
    onClick?: () => void;
}

export interface AccordianProps {
    children?: ReactNode;
}

const AccordianHeader = ({ headerId, panelId, summary, expand, onClick }: {
    headerId: string,
    panelId: string,
    summary: string,
    expand: boolean,
    onClick: () => void,
}) => {

    return (<h3 className="w-full m-0 p-0 focus-within:border-blue-400">
        <button
          id={headerId}
          aria-expanded={expand}
          aria-controls={panelId}
          onClick={onClick}
          type="button"
          className="h-8 flex w-full justify-between items-center px-5 py-4"
        >
          <span>
             {summary}
          </span>
          <span className={`inline-block w-2 h-2 border-solid border-black border-t-0 border-l-0 border-[2px] translate-y-[-1px] rotate-[${ expand ? '225deg' : '45deg'}]`}></span>
        </button>
    </h3>);
}

const AccordianPanel = ({ headerId, panelId, expand, children }: {
    children: ReactNode,
    headerId: string,
    panelId: string,
    expand: boolean,
}) => {
    return (<div
            id={panelId}
            role="region"
            aria-labelledby={headerId}
            className={`${ expand ? '': 'hidden' } border-t-2 border-solid border-gray-400 px-5 py-4`}
           >
             {children}
           </div>
        );
}

export const AccordianItem = ({
    id,
    summary,
    children,
  }: AccordianItemProps) => {
    const headerId = `accoridan:header:button:${id}`;
    const panelId = `accoridan:panel:${id}`;
    const [expand, setExpand] = useState<boolean>(false);
    return (<div className="w-full border-b-2 border-solid border-gray-400 last:border-b-0">
        <AccordianHeader
          headerId={headerId}
          panelId={panelId}
          summary={summary}
          expand={expand}
          onClick={() => { setExpand(state => !state)}}
        />
        <AccordianPanel
           headerId={headerId}
           panelId={panelId}
           expand={expand}
        >
            {children}
        </AccordianPanel>
    </div>);
};

export const Accordian = ({ children }: AccordianProps) => {
    return (<div className="flex flex-col max-w-full items-center border-solid border-black border rounded-lg">
        {children}
    </div>)
}
