const Ziggy = {"url":"https:\/\/ems-vue.test","port":null,"defaults":{},"routes":{"sanctum.csrf-cookie":{"uri":"sanctum\/csrf-cookie","methods":["GET","HEAD"]},"ignition.healthCheck":{"uri":"_ignition\/health-check","methods":["GET","HEAD"]},"ignition.executeSolution":{"uri":"_ignition\/execute-solution","methods":["POST"]},"ignition.updateConfig":{"uri":"_ignition\/update-config","methods":["POST"]},"login":{"uri":"login","methods":["GET","HEAD"]},"login.store":{"uri":"login","methods":["POST"]},"logout":{"uri":"logout","methods":["DELETE"]},"dashboard":{"uri":"\/","methods":["GET","HEAD"]},"users.index":{"uri":"users","methods":["GET","HEAD"]},"users.create":{"uri":"users\/create","methods":["GET","HEAD"]},"users.store":{"uri":"users","methods":["POST"]},"users.show":{"uri":"users\/{user}","methods":["GET","HEAD"],"parameters":["user"]},"users.edit":{"uri":"users\/{user}\/edit","methods":["GET","HEAD"],"parameters":["user"],"bindings":{"user":"id"}},"users.update":{"uri":"users\/{user}","methods":["PUT","PATCH"],"parameters":["user"],"bindings":{"user":"id"}},"users.destroy":{"uri":"users\/{user}","methods":["DELETE"],"parameters":["user"],"bindings":{"user":"id"}},"venues.index":{"uri":"venues","methods":["GET","HEAD"]},"venues.create":{"uri":"venues\/create","methods":["GET","HEAD"]},"venues.store":{"uri":"venues","methods":["POST"]},"venues.show":{"uri":"venues\/{venue}","methods":["GET","HEAD"],"parameters":["venue"]},"venues.edit":{"uri":"venues\/{venue}\/edit","methods":["GET","HEAD"],"parameters":["venue"],"bindings":{"venue":"id"}},"venues.update":{"uri":"venues\/{venue}","methods":["PUT","PATCH"],"parameters":["venue"],"bindings":{"venue":"id"}},"venues.destroy":{"uri":"venues\/{venue}","methods":["DELETE"],"parameters":["venue"],"bindings":{"venue":"id"}},"events.index":{"uri":"events","methods":["GET","HEAD"]},"events.create":{"uri":"events\/create","methods":["GET","HEAD"]},"events.store":{"uri":"events","methods":["POST"]},"events.show":{"uri":"events\/{event}","methods":["GET","HEAD"],"parameters":["event"]},"events.edit":{"uri":"events\/{event}\/edit","methods":["GET","HEAD"],"parameters":["event"],"bindings":{"event":"id"}},"events.update":{"uri":"events\/{event}","methods":["PUT","PATCH"],"parameters":["event"],"bindings":{"event":"id"}},"events.destroy":{"uri":"events\/{event}","methods":["DELETE"],"parameters":["event"],"bindings":{"event":"id"}},"organizations.index":{"uri":"organizations","methods":["GET","HEAD"]},"organizations.create":{"uri":"organizations\/create","methods":["GET","HEAD"]},"organizations.store":{"uri":"organizations","methods":["POST"]},"organizations.show":{"uri":"organizations\/{organization}","methods":["GET","HEAD"],"parameters":["organization"]},"organizations.edit":{"uri":"organizations\/{organization}\/edit","methods":["GET","HEAD"],"parameters":["organization"],"bindings":{"organization":"id"}},"organizations.update":{"uri":"organizations\/{organization}","methods":["PUT","PATCH"],"parameters":["organization"],"bindings":{"organization":"id"}},"organizations.destroy":{"uri":"organizations\/{organization}","methods":["DELETE"],"parameters":["organization"],"bindings":{"organization":"id"}},"contacts.index":{"uri":"contacts","methods":["GET","HEAD"]},"contacts.create":{"uri":"contacts\/create","methods":["GET","HEAD"]},"contacts.store":{"uri":"contacts","methods":["POST"]},"contacts.show":{"uri":"contacts\/{contact}","methods":["GET","HEAD"],"parameters":["contact"]},"contacts.edit":{"uri":"contacts\/{contact}\/edit","methods":["GET","HEAD"],"parameters":["contact"],"bindings":{"contact":"id"}},"contacts.update":{"uri":"contacts\/{contact}","methods":["PUT","PATCH"],"parameters":["contact"],"bindings":{"contact":"id"}},"contacts.destroy":{"uri":"contacts\/{contact}","methods":["DELETE"],"parameters":["contact"],"bindings":{"contact":"id"}},"reports":{"uri":"reports","methods":["GET","HEAD"]},"image":{"uri":"img\/{path}","methods":["GET","HEAD"],"wheres":{"path":".*"},"parameters":["path"]}}};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
