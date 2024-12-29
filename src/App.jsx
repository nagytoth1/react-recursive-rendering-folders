import { DocumentIcon, FolderIcon } from "@heroicons/react/16/solid";
// import OriginalFolders from "./components/OriginalFolders";

const COLOR_MAPPINGS = ["#FF5733", "#2b54d4", "#33FF57", "#3357FF", "#FFD700"];

function App() {
  const folders = [
    {
      name: "home",
      folders: [
        {
          name: "Movies",
          folders: [
            {
              name: "action",
              folders: [
                {
                  name: "2000s",
                  folders: [
                    { name: "2000", folders: [] },
                    { name: "2001", folders: [] },
                    { name: "2002", folders: [] },
                  ],
                },
                { name: "2010s", folders: [] },
              ],
            },
            { name: "comedy", folders: [] },
          ],
        },
        { name: "Music", folders: [] },
        { name: "Pictures", folders: [] },
        { name: "document.txt" },
      ],
    },
  ];
  // Pictures directory can have children, and the children can have children, we want to render the children as well
  // let's say we want to define color mapping for the different depths
  // return <OriginalFolders />;
  // folders can have folders inside
  return (
    <ul>
      {folders.map((folder) => (
        <Folder folder={folder} depth={0} key={name} />
      ))}
    </ul>
  );
}

function Folder({ folder, depth }) {
  const { name, folders: subfolders } = folder;
  const fillColor = COLOR_MAPPINGS[depth];
  return (
    <li key={`${name}_1`}>
      <span>
        {subfolders ? (
          <FolderIcon width={20} fill={fillColor} />
        ) : (
          <DocumentIcon width={20} fill={fillColor} />
        )}
        {name}
        {/* ezt megint meg tudnánk ismételni, de eléggé repetitív */}
        {subfolders && subfolders.length > 0 && (
          <ul>
            {subfolders.map((subfolder, index) => (
              <Folder
                folder={subfolder}
                key={`${index}_${depth}`}
                depth={depth + 1}
              />
            ))}
          </ul>
        )}
      </span>
    </li>
  );
}

export default App;
