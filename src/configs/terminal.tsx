import type { TerminalData } from "~/types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              Hey! I'm Efe Can Adasal. Senior Web3 Marketer.
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content:
          "Theoretical Machine Learning / Computer Vision / Vision-Language Learning"
      },
      // {
      //   id: "about-who-cares",
      //   title: "who-cares.txt",
      //   type: "file",
      //   content:
      //     "I'm open to summer research opportunities for summer 2022 lol."
      // },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:0xefe.eth@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                0xefe.eth@gmail.com
              </a>{" "}
              /{" "}
            
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/Dev0xEfe"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/Dev0xEfe
              </a>
            </li>
            <li>
              Linkedin:{" "}
              <a
                className="text-blue-300"
                href="https://www.linkedin.com/in/efe-can-adasal-495779140/"
                target="_blank"
                rel="noreferrer"
              >
                https://www.linkedin.com/in/efe-can-adasal-495779140/
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "my-dream.cpp",
    type: "file",
    content: (
      <div className="py-1">
        <div>
          <span className="text-yellow-400">while</span>(
          <span className="text-blue-400">sleeping</span>) <span>{"{"}</span>
        </div>
        <div>
          <span className="text-blue-400 ml-9">money</span>
          <span className="text-yellow-400">++</span>;
        </div>
        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;
