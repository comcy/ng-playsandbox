export function getSandboxMenuItems() {
return [{"key":"./app/components/notice.component.sandbox","searchKey":"NoticeComponent","name":"NoticeComponent","label":"","scenarioMenuItems":[{"key":1,"description":"with simple text"}]}];
}
export function getSandbox(path: string) {
switch(path) {
case './app/components/notice.component.sandbox':
return import('./app/components/notice.component.sandbox').then(sandbox => { return sandbox.default.serialize('./app/components/notice.component.sandbox'); });
}}
