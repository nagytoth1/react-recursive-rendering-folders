import { FolderIcon } from "@heroicons/react/16/solid";
import React from "react";

export default function OriginalFolders() {
  return (
    <div>
      <ul>
        <li>
          <span>
            <FolderIcon width={20} />
            Home
          </span>
          <ul>
            <li>
              <span>
                <FolderIcon width={20} />
                Movies
              </span>
            </li>
          </ul>
          <ul>
            <li>
              <span>
                <FolderIcon width={20} />
                Music
              </span>
            </li>
          </ul>
          <ul>
            <li>
              <span>
                <FolderIcon width={20} />
                Pictures
              </span>
              <ul>
                <li>
                  <span>
                    <FolderIcon width={20} />
                    Personal
                  </span>
                </li>
              </ul>
              <ul>
                <li>
                  <span>
                    <FolderIcon width={20} />
                    Work
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
