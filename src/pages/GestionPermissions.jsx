import React, { useEffect, useState } from "react";

function GestionPermissions() {
  return (
    <div>
      <div>
        <div>
          <h1>Gestion des permissions</h1>
        </div>
        <button>Nouveau Rôle</button>
      </div>
      <Permissions />
    </div>
  );
}

export default GestionPermissions;
