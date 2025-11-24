import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";

function Permissions() {
  const [roles] = useState([
    "Defaut",
    "Gestionnaire",
    "Entretien",
    "Admin Entretien",
    "Admin Gestion",
    "Super Admin",
  ]);
  const [currentRole, setCurrentRole] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [toutDroits, setToutDroits] = useState({
    Defaut: [
      [
        "Savon",
        [
          {
            libelle: "droit1",
            description: "Description droit1",
            active: true,
          },
          {
            libelle: "droit2",
            description: "Description droit2",
            active: false,
          },
        ],
      ],
      [
        "Gestion de l'aire",
        [
          {
            libelle: "droit3",
            description: "Description droit3",
            active: false,
          },
          {
            libelle: "droit4",
            description: "Description droit4",
            active: true,
          },
        ],
      ],
    ],
    Gestionnaire: [
      [
        "Savon",
        [
          {
            libelle: "droit1",
            description: "Description droit1",
            active: true,
          },
          {
            libelle: "droit2",
            description: "Description droit2",
            active: false,
          },
        ],
      ],
      [
        "Gestion de l'aire",
        [
          {
            libelle: "droit3",
            description: "Description droit3",
            active: false,
          },
          {
            libelle: "droit4",
            description: "Description droit4",
            active: true,
          },
        ],
      ],
    ],
    Entretien: [
      [
        "Savon",
        [
          {
            libelle: "droit1",
            description: "Description droit1",
            active: true,
          },
          {
            libelle: "droit2",
            description: "Description droit2",
            active: false,
          },
        ],
      ],
      [
        "Gestion de l'aire",
        [
          {
            libelle: "droit3",
            description: "Description droit3",
            active: false,
          },
          {
            libelle: "droit4",
            description: "Description droit4",
            active: true,
          },
        ],
      ],
    ],
    "Admin Entretien": [
      [
        "Savon",
        [
          {
            libelle: "droit1",
            description: "Description droit1",
            active: true,
          },
          {
            libelle: "droit2",
            description: "Description droit2",
            active: false,
          },
        ],
      ],
      [
        "Gestion de l'aire",
        [
          {
            libelle: "droit3",
            description: "Description droit3",
            active: false,
          },
          {
            libelle: "droit4",
            description: "Description droit4",
            active: true,
          },
        ],
      ],
    ],
    "Admin Gestion": [
      [
        "Savon",
        [
          {
            libelle: "droit1",
            description: "Description droit1",
            active: true,
          },
          {
            libelle: "droit2",
            description: "Description droit2",
            active: false,
          },
        ],
      ],
      [
        "Gestion de l'aire",
        [
          {
            libelle: "droit3",
            description: "Description droit3",
            active: false,
          },
          {
            libelle: "droit4",
            description: "Description droit4",
            active: true,
          },
        ],
      ],
    ],
    "Super Admin": [
      [
        "Savon",
        [
          {
            libelle: "droit1",
            description: "Description droit1",
            active: true,
          },
          {
            libelle: "droit2",
            description: "Description droit2",
            active: true,
          },
        ],
      ],
      [
        "Gestion de l'aire",
        [
          {
            libelle: "droit3",
            description: "Description droit3",
            active: true,
          },
          {
            libelle: "droit4",
            description: "Description droit4",
            active: true,
          },
        ],
      ],
    ],
  });
  const [droits, setDroits] = useState(null);
  // const [infos, setInfos] = useState([]);

  function getDroits(role) {
    const keys = Object.keys(toutDroits);
    if (keys.includes(role)) {
      return [...toutDroits[role]];
    } else {
      return [...toutDroits["Defaut"]];
    }
    // A remplacer
    // GET : Droits
  }

  function updateDroits(indexType, indexDroit) {
    let tempDroits = [...droits];
    // let tempInfos = [...infos];
    // const Info =
    //   "Le droit : " +
    //   tempDroits[indexType][1][indexDroit].libelle +
    //   " est maintenant " +
    //   (!tempDroits[indexType][1][indexDroit].active ? "activé" : "désactivé") +
    //   " pour le rôle : " +
    //   currentRole;
    // tempInfos.push(Info);
    // setInfos(tempInfos);
    tempDroits[indexType][1][indexDroit].active =
      !tempDroits[indexType][1][indexDroit].active;
    setDroits(tempDroits);
    // POST : Update droit pour le role en BDD
  }

  function updateRole(role) {
    let tempDroits = { ...toutDroits };
    tempDroits[currentRole] = [...droits];
    // let tempInfos = [...infos];
    // const Info = "Passage au rôle : " + role;
    // tempInfos.push(Info);
    // setInfos(tempInfos);
    setToutDroits(tempDroits);
    setCurrentRole(role);
    setDroits(getDroits(role));
  }

  useEffect(() => {
    function fetchData() {
      if (currentRole === null) {
        const futurRole = roles[0];
        setCurrentRole(futurRole);
        setDroits(getDroits(futurRole));
      } else {
        setDroits(getDroits(currentRole));
      }
      setIsLoading(false);
    }
    if (isLoading) {
      void fetchData();
    }
  });

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <h2>Roles</h2>
      <div className="flex justify-around">
        {roles.map((role, key) => (
          <Card
            key={key}
            className={currentRole === role ? "bg-cyan-900 w-fit" : "w-fit"}
            onClick={() => {
              if (currentRole !== role) {
                updateRole(role);
              }
            }}
          >
            <div className={"w-fit"}>
              <CardContent className={"capitalize w-fit"}>{role}</CardContent>
            </div>
          </Card>
        ))}
      </div>
      <h2>Droits</h2>
      <div className={"flex flex-col"}>
        {droits.map((droitData, key) => (
          <div key={key} className={"py-2"}>
            <h2>{droitData[0]}</h2>
            <div className="grid grid-cols-4 gap-4">
              {droitData[1].map((droit, key2) => (
                <Card key={key2}>
                  <CardHeader>
                    <div className={"flex justify-between"}>
                      <CardTitle>{droit.libelle}</CardTitle>
                      <input
                        type={"checkbox"}
                        onChange={() => updateDroits(key, key2)}
                        checked={droit.active}
                      ></input>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className={"capitalize"}>{droit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/*{infos.length > 0 ? (*/}
      {/*  <div>*/}
      {/*    <h2>Informations</h2>*/}
      {/*    <div>*/}
      {/*      <Card>*/}
      {/*        <CardContent>*/}
      {/*          {infos.map((info, key) => (*/}
      {/*            <p key={key}>{info}</p>*/}
      {/*          ))}*/}
      {/*        </CardContent>*/}
      {/*      </Card>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*) : (*/}
      {/*  ""*/}
      {/*)}*/}
    </div>
  );
}

export default Permissions;
