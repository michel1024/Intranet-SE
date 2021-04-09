import { sp } from "@pnp/sp/presets/core";

export namespace AdminController{

  export async function getAdmin() {
    const admin = sp.web.lists.getById('b1773a5b-1714-4df7-84e0-ed924bff9ac8');
    let result = await admin.items
    .filter("Title eq 'Intranet Admin' and AdministradoresId eq "+ _spPageContextInfo.userId)
    .get();

    return result;
  }
}