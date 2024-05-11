import _ from "lodash";
import Table from "../../base-components/Table";
import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "../../base-components/PreviewComponent";
import { FormSwitch } from "../../base-components/Form";

function Main() {
  return (
    <>
      <div className="flex items-center mt-8 intro-y">
        <h2 className="mr-auto text-lg font-medium">Regular Table</h2>
      </div>
      <div className="grid grid-cols-12 gap-6 mt-5">
        <div className="col-span-12 intro-y lg:col-span-6">
          {/* BEGIN: Basic Table */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60">
                  <h2 className="mr-auto text-base font-medium">Basic Table</h2>
                  <FormSwitch className="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
                    <FormSwitch.Label htmlFor="show-example-1">
                      Show example code
                    </FormSwitch.Label>
                    <FormSwitch.Input
                      id="show-example-1"
                      onClick={toggle}
                      className="ml-3 mr-0"
                      type="checkbox"
                    />
                  </FormSwitch>
                </div>
                <div className="p-5">
                  <Preview>
                    <div className="overflow-x-auto">
                      <Table>
                        <Table.Thead>
                          <Table.Tr>
                            <Table.Th className="whitespace-nowrap">#</Table.Th>
                            <Table.Th className="whitespace-nowrap">
                              First Name
                            </Table.Th>
                            <Table.Th className="whitespace-nowrap">
                              Last Name
                            </Table.Th>
                            <Table.Th className="whitespace-nowrap">
                              Username
                            </Table.Th>
                          </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                          <Table.Tr>
                            <Table.Td>1</Table.Td>
                            <Table.Td>Angelina</Table.Td>
                            <Table.Td>Jolie</Table.Td>
                            <Table.Td>@angelinajolie</Table.Td>
                          </Table.Tr>
                          <Table.Tr>
                            <Table.Td>2</Table.Td>
                            <Table.Td>Brad</Table.Td>
                            <Table.Td>Pitt</Table.Td>
                            <Table.Td>@bradpitt</Table.Td>
                          </Table.Tr>
                          <Table.Tr>
                            <Table.Td>3</Table.Td>
                            <Table.Td>Charlie</Table.Td>
                            <Table.Td>Hunnam</Table.Td>
                            <Table.Td>@charliehunnam</Table.Td>
                          </Table.Tr>
                        </Table.Tbody>
                      </Table>
                      <Table dark className="mt-5">
                        <Table.Thead>
                          <Table.Tr>
                            <Table.Th className="whitespace-nowrap">#</Table.Th>
                            <Table.Th className="whitespace-nowrap">
                              First Name
                            </Table.Th>
                            <Table.Th className="whitespace-nowrap">
                              Last Name
                            </Table.Th>
                            <Table.Th className="whitespace-nowrap">
                              Username
                            </Table.Th>
                          </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                          <Table.Tr>
                            <Table.Td>1</Table.Td>
                            <Table.Td>Angelina</Table.Td>
                            <Table.Td>Jolie</Table.Td>
                            <Table.Td>@angelinajolie</Table.Td>
                          </Table.Tr>
                          <Table.Tr>
                            <Table.Td>2</Table.Td>
                            <Table.Td>Brad</Table.Td>
                            <Table.Td>Pitt</Table.Td>
                            <Table.Td>@bradpitt</Table.Td>
                          </Table.Tr>
                          <Table.Tr>
                            <Table.Td>3</Table.Td>
                            <Table.Td>Charlie</Table.Td>
                            <Table.Td>Hunnam</Table.Td>
                            <Table.Td>@charliehunnam</Table.Td>
                          </Table.Tr>
                        </Table.Tbody>
                      </Table>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <div className="overflow-x-auto">
                  <Table>
                    <Table.Thead>
                      <Table.Tr>
                        <Table.Th className="whitespace-nowrap">#</Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          First Name
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          Last Name
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          Username
                        </Table.Th>
                      </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                      <Table.Tr>
                        <Table.Td>1</Table.Td>
                        <Table.Td>Angelina</Table.Td>
                        <Table.Td>Jolie</Table.Td>
                        <Table.Td>@angelinajolie</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>2</Table.Td>
                        <Table.Td>Brad</Table.Td>
                        <Table.Td>Pitt</Table.Td>
                        <Table.Td>@bradpitt</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>3</Table.Td>
                        <Table.Td>Charlie</Table.Td>
                        <Table.Td>Hunnam</Table.Td>
                        <Table.Td>@charliehunnam</Table.Td>
                      </Table.Tr>
                    </Table.Tbody>
                  </Table>
                  <Table dark className="mt-5">
                    <Table.Thead>
                      <Table.Tr>
                        <Table.Th className="whitespace-nowrap">#</Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          First Name
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          Last Name
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          Username
                        </Table.Th>
                      </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                      <Table.Tr>
                        <Table.Td>1</Table.Td>
                        <Table.Td>Angelina</Table.Td>
                        <Table.Td>Jolie</Table.Td>
                        <Table.Td>@angelinajolie</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>2</Table.Td>
                        <Table.Td>Brad</Table.Td>
                        <Table.Td>Pitt</Table.Td>
                        <Table.Td>@bradpitt</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>3</Table.Td>
                        <Table.Td>Charlie</Table.Td>
                        <Table.Td>Hunnam</Table.Td>
                        <Table.Td>@charliehunnam</Table.Td>
                      </Table.Tr>
                    </Table.Tbody>
                  </Table>
                </div>
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Basic Table */}
          {/* BEGIN: Bordered Table */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60">
                  <h2 className="mr-auto text-base font-medium">
                    Bordered Table
                  </h2>
                  <FormSwitch className="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
                    <FormSwitch.Label htmlFor="show-example-2">
                      Show example code
                    </FormSwitch.Label>
                    <FormSwitch.Input
                      id="show-example-2"
                      onClick={toggle}
                      className="ml-3 mr-0"
                      type="checkbox"
                    />
                  </FormSwitch>
                </div>
                <div className="p-5">
                  <Preview>
                    <div className="overflow-x-auto">
                      <Table bordered>
                        <Table.Thead>
                          <Table.Tr>
                            <Table.Th className="whitespace-nowrap">#</Table.Th>
                            <Table.Th className="whitespace-nowrap">
                              First Name
                            </Table.Th>
                            <Table.Th className="whitespace-nowrap">
                              Last Name
                            </Table.Th>
                            <Table.Th className="whitespace-nowrap">
                              Username
                            </Table.Th>
                          </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                          <Table.Tr>
                            <Table.Td>1</Table.Td>
                            <Table.Td>Angelina</Table.Td>
                            <Table.Td>Jolie</Table.Td>
                            <Table.Td>@angelinajolie</Table.Td>
                          </Table.Tr>
                          <Table.Tr>
                            <Table.Td>2</Table.Td>
                            <Table.Td>Brad</Table.Td>
                            <Table.Td>Pitt</Table.Td>
                            <Table.Td>@bradpitt</Table.Td>
                          </Table.Tr>
                          <Table.Tr>
                            <Table.Td>3</Table.Td>
                            <Table.Td>Charlie</Table.Td>
                            <Table.Td>Hunnam</Table.Td>
                            <Table.Td>@charliehunnam</Table.Td>
                          </Table.Tr>
                        </Table.Tbody>
                      </Table>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <div className="overflow-x-auto">
                  <Table bordered>
                    <Table.Thead>
                      <Table.Tr>
                        <Table.Th className="whitespace-nowrap">#</Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          First Name
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          Last Name
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          Username
                        </Table.Th>
                      </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                      <Table.Tr>
                        <Table.Td>1</Table.Td>
                        <Table.Td>Angelina</Table.Td>
                        <Table.Td>Jolie</Table.Td>
                        <Table.Td>@angelinajolie</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>2</Table.Td>
                        <Table.Td>Brad</Table.Td>
                        <Table.Td>Pitt</Table.Td>
                        <Table.Td>@bradpitt</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>3</Table.Td>
                        <Table.Td>Charlie</Table.Td>
                        <Table.Td>Hunnam</Table.Td>
                        <Table.Td>@charliehunnam</Table.Td>
                      </Table.Tr>
                    </Table.Tbody>
                  </Table>
                </div>
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Bordered Table */}
          {/* BEGIN: Hoverable Table */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60">
                  <h2 className="mr-auto text-base font-medium">
                    Hoverable Table
                  </h2>
                  <FormSwitch className="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
                    <FormSwitch.Label htmlFor="show-example-3">
                      Show example code
                    </FormSwitch.Label>
                    <FormSwitch.Input
                      id="show-example-3"
                      onClick={toggle}
                      className="ml-3 mr-0"
                      type="checkbox"
                    />
                  </FormSwitch>
                </div>
                <div className="p-5">
                  <Preview>
                    <div className="overflow-x-auto">
                      <Table
                        bordered
                        hover
                      >
                        <Table.Thead>
                          <Table.Tr>
                            <Table.Th className="whitespace-nowrap">#</Table.Th>
                            <Table.Th className="whitespace-nowrap">
                              First Name
                            </Table.Th>
                            <Table.Th className="whitespace-nowrap">
                              Last Name
                            </Table.Th>
                            <Table.Th className="whitespace-nowrap">
                              Username
                            </Table.Th>
                          </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                          <Table.Tr>
                            <Table.Td>1</Table.Td>
                            <Table.Td>Angelina</Table.Td>
                            <Table.Td>Jolie</Table.Td>
                            <Table.Td>@angelinajolie</Table.Td>
                          </Table.Tr>
                          <Table.Tr>
                            <Table.Td>2</Table.Td>
                            <Table.Td>Brad</Table.Td>
                            <Table.Td>Pitt</Table.Td>
                            <Table.Td>@bradpitt</Table.Td>
                          </Table.Tr>
                          <Table.Tr>
                            <Table.Td>3</Table.Td>
                            <Table.Td>Charlie</Table.Td>
                            <Table.Td>Hunnam</Table.Td>
                            <Table.Td>@charliehunnam</Table.Td>
                          </Table.Tr>
                        </Table.Tbody>
                      </Table>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <div className="overflow-x-auto">
                  <Table
                    bordered
                    hover
                  >
                    <Table.Thead>
                      <Table.Tr>
                        <Table.Th className="whitespace-nowrap">#</Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          First Name
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          Last Name
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          Username
                        </Table.Th>
                      </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                      <Table.Tr>
                        <Table.Td>1</Table.Td>
                        <Table.Td>Angelina</Table.Td>
                        <Table.Td>Jolie</Table.Td>
                        <Table.Td>@angelinajolie</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>2</Table.Td>
                        <Table.Td>Brad</Table.Td>
                        <Table.Td>Pitt</Table.Td>
                        <Table.Td>@bradpitt</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>3</Table.Td>
                        <Table.Td>Charlie</Table.Td>
                        <Table.Td>Hunnam</Table.Td>
                        <Table.Td>@charliehunnam</Table.Td>
                      </Table.Tr>
                    </Table.Tbody>
                  </Table>
                </div>
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Hoverable Table */}
          {/* BEGIN: Table Row States */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60">
                  <h2 className="mr-auto text-base font-medium">
                    Table Row States
                  </h2>
                  <FormSwitch className="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
                    <FormSwitch.Label htmlFor="show-example-4">
                      Show example code
                    </FormSwitch.Label>
                    <FormSwitch.Input
                      id="show-example-4"
                      onClick={toggle}
                      className="ml-3 mr-0"
                      type="checkbox"
                    />
                  </FormSwitch>
                </div>
                <div className="p-5">
                  <Preview>
                    <div className="overflow-x-auto">
                      <Table>
                        <Table.Thead>
                          <Table.Tr>
                            <Table.Th className="whitespace-nowrap">#</Table.Th>
                            <Table.Th className="whitespace-nowrap">
                              First Name
                            </Table.Th>
                            <Table.Th className="whitespace-nowrap">
                              Last Name
                            </Table.Th>
                            <Table.Th className="whitespace-nowrap">
                              Username
                            </Table.Th>
                          </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                          <Table.Tr className="text-white bg-primary">
                            <Table.Td>1</Table.Td>
                            <Table.Td>Angelina</Table.Td>
                            <Table.Td>Jolie</Table.Td>
                            <Table.Td>@angelinajolie</Table.Td>
                          </Table.Tr>
                          <Table.Tr className="text-white bg-danger">
                            <Table.Td>2</Table.Td>
                            <Table.Td>Brad</Table.Td>
                            <Table.Td>Pitt</Table.Td>
                            <Table.Td>@bradpitt</Table.Td>
                          </Table.Tr>
                          <Table.Tr className="bg-warning">
                            <Table.Td>3</Table.Td>
                            <Table.Td>Charlie</Table.Td>
                            <Table.Td>Hunnam</Table.Td>
                            <Table.Td>@charliehunnam</Table.Td>
                          </Table.Tr>
                        </Table.Tbody>
                      </Table>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <div className="overflow-x-auto">
                  <Table>
                    <Table.Thead>
                      <Table.Tr>
                        <Table.Th className="whitespace-nowrap">#</Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          First Name
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          Last Name
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          Username
                        </Table.Th>
                      </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                      <Table.Tr className="text-white bg-primary">
                        <Table.Td>1</Table.Td>
                        <Table.Td>Angelina</Table.Td>
                        <Table.Td>Jolie</Table.Td>
                        <Table.Td>@angelinajolie</Table.Td>
                      </Table.Tr>
                      <Table.Tr className="text-white bg-danger">
                        <Table.Td>2</Table.Td>
                        <Table.Td>Brad</Table.Td>
                        <Table.Td>Pitt</Table.Td>
                        <Table.Td>@bradpitt</Table.Td>
                      </Table.Tr>
                      <Table.Tr className="bg-warning">
                        <Table.Td>3</Table.Td>
                        <Table.Td>Charlie</Table.Td>
                        <Table.Td>Hunnam</Table.Td>
                        <Table.Td>@charliehunnam</Table.Td>
                      </Table.Tr>
                    </Table.Tbody>
                  </Table>
                </div>
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Table Row States */}
        </div>
        <div className="col-span-12 intro-y lg:col-span-6">
          {/* BEGIN: Table Head Options */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60">
                  <h2 className="mr-auto text-base font-medium">
                    Table Head Options
                  </h2>
                  <FormSwitch className="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
                    <FormSwitch.Label htmlFor="show-example-5">
                      Show example code
                    </FormSwitch.Label>
                    <FormSwitch.Input
                      id="show-example-5"
                      onClick={toggle}
                      className="ml-3 mr-0"
                      type="checkbox"
                    />
                  </FormSwitch>
                </div>
                <div className="p-5">
                  <Preview>
                    <div className="overflow-x-auto">
                      <Table>
                        <Table.Thead variant="dark">
                          <Table.Tr>
                            <Table.Th className="whitespace-nowrap">#</Table.Th>
                            <Table.Th className="whitespace-nowrap">
                              First Name
                            </Table.Th>
                            <Table.Th className="whitespace-nowrap">
                              Last Name
                            </Table.Th>
                            <Table.Th className="whitespace-nowrap">
                              Username
                            </Table.Th>
                          </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                          <Table.Tr>
                            <Table.Td>1</Table.Td>
                            <Table.Td>Angelina</Table.Td>
                            <Table.Td>Jolie</Table.Td>
                            <Table.Td>@angelinajolie</Table.Td>
                          </Table.Tr>
                          <Table.Tr>
                            <Table.Td>2</Table.Td>
                            <Table.Td>Brad</Table.Td>
                            <Table.Td>Pitt</Table.Td>
                            <Table.Td>@bradpitt</Table.Td>
                          </Table.Tr>
                          <Table.Tr>
                            <Table.Td>3</Table.Td>
                            <Table.Td>Charlie</Table.Td>
                            <Table.Td>Hunnam</Table.Td>
                            <Table.Td>@charliehunnam</Table.Td>
                          </Table.Tr>
                        </Table.Tbody>
                      </Table>
                      <Table className="mt-5">
                        <Table.Thead variant="light">
                          <Table.Tr>
                            <Table.Th className="whitespace-nowrap">#</Table.Th>
                            <Table.Th className="whitespace-nowrap">
                              First Name
                            </Table.Th>
                            <Table.Th className="whitespace-nowrap">
                              Last Name
                            </Table.Th>
                            <Table.Th className="whitespace-nowrap">
                              Username
                            </Table.Th>
                          </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                          <Table.Tr>
                            <Table.Td>1</Table.Td>
                            <Table.Td>Angelina</Table.Td>
                            <Table.Td>Jolie</Table.Td>
                            <Table.Td>@angelinajolie</Table.Td>
                          </Table.Tr>
                          <Table.Tr>
                            <Table.Td>2</Table.Td>
                            <Table.Td>Brad</Table.Td>
                            <Table.Td>Pitt</Table.Td>
                            <Table.Td>@bradpitt</Table.Td>
                          </Table.Tr>
                          <Table.Tr>
                            <Table.Td>3</Table.Td>
                            <Table.Td>Charlie</Table.Td>
                            <Table.Td>Hunnam</Table.Td>
                            <Table.Td>@charliehunnam</Table.Td>
                          </Table.Tr>
                        </Table.Tbody>
                      </Table>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <div className="overflow-x-auto">
                  <Table>
                    <Table.Thead variant="dark">
                      <Table.Tr>
                        <Table.Th className="whitespace-nowrap">#</Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          First Name
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          Last Name
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          Username
                        </Table.Th>
                      </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                      <Table.Tr>
                        <Table.Td>1</Table.Td>
                        <Table.Td>Angelina</Table.Td>
                        <Table.Td>Jolie</Table.Td>
                        <Table.Td>@angelinajolie</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>2</Table.Td>
                        <Table.Td>Brad</Table.Td>
                        <Table.Td>Pitt</Table.Td>
                        <Table.Td>@bradpitt</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>3</Table.Td>
                        <Table.Td>Charlie</Table.Td>
                        <Table.Td>Hunnam</Table.Td>
                        <Table.Td>@charliehunnam</Table.Td>
                      </Table.Tr>
                    </Table.Tbody>
                  </Table>
                  <Table className="mt-5">
                    <Table.Thead variant="light">
                      <Table.Tr>
                        <Table.Th className="whitespace-nowrap">#</Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          First Name
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          Last Name
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          Username
                        </Table.Th>
                      </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                      <Table.Tr>
                        <Table.Td>1</Table.Td>
                        <Table.Td>Angelina</Table.Td>
                        <Table.Td>Jolie</Table.Td>
                        <Table.Td>@angelinajolie</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>2</Table.Td>
                        <Table.Td>Brad</Table.Td>
                        <Table.Td>Pitt</Table.Td>
                        <Table.Td>@bradpitt</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>3</Table.Td>
                        <Table.Td>Charlie</Table.Td>
                        <Table.Td>Hunnam</Table.Td>
                        <Table.Td>@charliehunnam</Table.Td>
                      </Table.Tr>
                    </Table.Tbody>
                  </Table>
                </div>
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Table Head Options */}
          {/* BEGIN: Responsive Table */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60">
                  <h2 className="mr-auto text-base font-medium">
                    Responsive Table
                  </h2>
                  <FormSwitch className="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
                    <FormSwitch.Label htmlFor="show-example-6">
                      Show example code
                    </FormSwitch.Label>
                    <FormSwitch.Input
                      id="show-example-6"
                      onClick={toggle}
                      className="ml-3 mr-0"
                      type="checkbox"
                    />
                  </FormSwitch>
                </div>
                <div className="p-5">
                  <Preview>
                    <div className="overflow-x-auto">
                      <Table>
                        <Table.Thead>
                          <Table.Tr>
                            <Table.Th className="whitespace-nowrap">#</Table.Th>
                            <Table.Th className="whitespace-nowrap">
                              First Name
                            </Table.Th>
                            <Table.Th className="whitespace-nowrap">
                              Last Name
                            </Table.Th>
                            <Table.Th className="whitespace-nowrap">
                              Username
                            </Table.Th>
                            <Table.Th className="whitespace-nowrap">
                              Email
                            </Table.Th>
                            <Table.Th className="whitespace-nowrap">
                              Address
                            </Table.Th>
                          </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                          <Table.Tr>
                            <Table.Td className="whitespace-nowrap">1</Table.Td>
                            <Table.Td className="whitespace-nowrap">
                              Angelina
                            </Table.Td>
                            <Table.Td className="whitespace-nowrap">
                              Jolie
                            </Table.Td>
                            <Table.Td className="whitespace-nowrap">
                              @angelinajolie
                            </Table.Td>
                            <Table.Td className="whitespace-nowrap">
                              angelinajolie@gmail.com
                            </Table.Td>
                            <Table.Td className="whitespace-nowrap">
                              260 W. Storm Street New York, NY 10025.
                            </Table.Td>
                          </Table.Tr>
                          <Table.Tr>
                            <Table.Td className="whitespace-nowrap">2</Table.Td>
                            <Table.Td className="whitespace-nowrap">
                              Brad
                            </Table.Td>
                            <Table.Td className="whitespace-nowrap">
                              Pitt
                            </Table.Td>
                            <Table.Td className="whitespace-nowrap">
                              @bradpitt
                            </Table.Td>
                            <Table.Td className="whitespace-nowrap">
                              bradpitt@gmail.com
                            </Table.Td>
                            <Table.Td className="whitespace-nowrap">
                              47 Division St. Buffalo, NY 14241.
                            </Table.Td>
                          </Table.Tr>
                          <Table.Tr>
                            <Table.Td className="whitespace-nowrap">3</Table.Td>
                            <Table.Td className="whitespace-nowrap">
                              Charlie
                            </Table.Td>
                            <Table.Td className="whitespace-nowrap">
                              Hunnam
                            </Table.Td>
                            <Table.Td className="whitespace-nowrap">
                              @charliehunnam
                            </Table.Td>
                            <Table.Td className="whitespace-nowrap">
                              charliehunnam@gmail.com
                            </Table.Td>
                            <Table.Td className="whitespace-nowrap">
                              8023 Amerige Street Harriman, NY 10926.
                            </Table.Td>
                          </Table.Tr>
                        </Table.Tbody>
                      </Table>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <div className="overflow-x-auto">
                  <Table>
                    <Table.Thead>
                      <Table.Tr>
                        <Table.Th className="whitespace-nowrap">#</Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          First Name
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          Last Name
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          Username
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          Email
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          Address
                        </Table.Th>
                      </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                      <Table.Tr>
                        <Table.Td className="whitespace-nowrap">1</Table.Td>
                        <Table.Td className="whitespace-nowrap">
                          Angelina
                        </Table.Td>
                        <Table.Td className="whitespace-nowrap">
                          Jolie
                        </Table.Td>
                        <Table.Td className="whitespace-nowrap">
                          @angelinajolie
                        </Table.Td>
                        <Table.Td className="whitespace-nowrap">
                          angelinajolie@gmail.com
                        </Table.Td>
                        <Table.Td className="whitespace-nowrap">
                          260 W. Storm Street New York, NY 10025.
                        </Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td className="whitespace-nowrap">2</Table.Td>
                        <Table.Td className="whitespace-nowrap">
                          Brad
                        </Table.Td>
                        <Table.Td className="whitespace-nowrap">
                          Pitt
                        </Table.Td>
                        <Table.Td className="whitespace-nowrap">
                          @bradpitt
                        </Table.Td>
                        <Table.Td className="whitespace-nowrap">
                          bradpitt@gmail.com
                        </Table.Td>
                        <Table.Td className="whitespace-nowrap">
                          47 Division St. Buffalo, NY 14241.
                        </Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td className="whitespace-nowrap">3</Table.Td>
                        <Table.Td className="whitespace-nowrap">
                          Charlie
                        </Table.Td>
                        <Table.Td className="whitespace-nowrap">
                          Hunnam
                        </Table.Td>
                        <Table.Td className="whitespace-nowrap">
                          @charliehunnam
                        </Table.Td>
                        <Table.Td className="whitespace-nowrap">
                          charliehunnam@gmail.com
                        </Table.Td>
                        <Table.Td className="whitespace-nowrap">
                          8023 Amerige Street Harriman, NY 10926.
                        </Table.Td>
                      </Table.Tr>
                    </Table.Tbody>
                  </Table>
                </div>
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Responsive Table */}
          {/* BEGIN: Small Table */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60">
                  <h2 className="mr-auto text-base font-medium">Small Table</h2>
                  <FormSwitch className="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
                    <FormSwitch.Label htmlFor="show-example-7">
                      Show example code
                    </FormSwitch.Label>
                    <FormSwitch.Input
                      id="show-example-7"
                      onClick={toggle}
                      className="ml-3 mr-0"
                      type="checkbox"
                    />
                  </FormSwitch>
                </div>
                <div className="p-5">
                  <Preview>
                    <div className="overflow-x-auto">
                      <Table sm>
                        <Table.Thead>
                          <Table.Tr>
                            <Table.Th className="whitespace-nowrap">#</Table.Th>
                            <Table.Th className="whitespace-nowrap">
                              First Name
                            </Table.Th>
                            <Table.Th className="whitespace-nowrap">
                              Last Name
                            </Table.Th>
                            <Table.Th className="whitespace-nowrap">
                              Username
                            </Table.Th>
                          </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                          <Table.Tr>
                            <Table.Td>1</Table.Td>
                            <Table.Td>Angelina</Table.Td>
                            <Table.Td>Jolie</Table.Td>
                            <Table.Td>@angelinajolie</Table.Td>
                          </Table.Tr>
                          <Table.Tr>
                            <Table.Td>2</Table.Td>
                            <Table.Td>Brad</Table.Td>
                            <Table.Td>Pitt</Table.Td>
                            <Table.Td>@bradpitt</Table.Td>
                          </Table.Tr>
                          <Table.Tr>
                            <Table.Td>3</Table.Td>
                            <Table.Td>Charlie</Table.Td>
                            <Table.Td>Hunnam</Table.Td>
                            <Table.Td>@charliehunnam</Table.Td>
                          </Table.Tr>
                        </Table.Tbody>
                      </Table>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <div className="overflow-x-auto">
                  <Table sm>
                    <Table.Thead>
                      <Table.Tr>
                        <Table.Th className="whitespace-nowrap">#</Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          First Name
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          Last Name
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          Username
                        </Table.Th>
                      </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                      <Table.Tr>
                        <Table.Td>1</Table.Td>
                        <Table.Td>Angelina</Table.Td>
                        <Table.Td>Jolie</Table.Td>
                        <Table.Td>@angelinajolie</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>2</Table.Td>
                        <Table.Td>Brad</Table.Td>
                        <Table.Td>Pitt</Table.Td>
                        <Table.Td>@bradpitt</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>3</Table.Td>
                        <Table.Td>Charlie</Table.Td>
                        <Table.Td>Hunnam</Table.Td>
                        <Table.Td>@charliehunnam</Table.Td>
                      </Table.Tr>
                    </Table.Tbody>
                  </Table>
                </div>
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Small Table */}
          {/* BEGIN: Striped Rows */}
          <PreviewComponent className="mt-5 intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col items-center p-5 border-b sm:flex-row border-slate-200/60">
                  <h2 className="mr-auto text-base font-medium">
                    Striped Rows
                  </h2>
                  <FormSwitch className="w-full mt-3 sm:w-auto sm:ml-auto sm:mt-0">
                    <FormSwitch.Label htmlFor="show-example-8">
                      Show example code
                    </FormSwitch.Label>
                    <FormSwitch.Input
                      id="show-example-8"
                      onClick={toggle}
                      className="ml-3 mr-0"
                      type="checkbox"
                    />
                  </FormSwitch>
                </div>
                <div className="p-5">
                  <Preview>
                    <div className="overflow-x-auto">
                      <Table striped>
                        <Table.Thead>
                          <Table.Tr>
                            <Table.Th className="whitespace-nowrap">#</Table.Th>
                            <Table.Th className="whitespace-nowrap">
                              First Name
                            </Table.Th>
                            <Table.Th className="whitespace-nowrap">
                              Last Name
                            </Table.Th>
                            <Table.Th className="whitespace-nowrap">
                              Username
                            </Table.Th>
                          </Table.Tr>
                        </Table.Thead>
                        <Table.Tbody>
                          <Table.Tr>
                            <Table.Td>1</Table.Td>
                            <Table.Td>Angelina</Table.Td>
                            <Table.Td>Jolie</Table.Td>
                            <Table.Td>@angelinajolie</Table.Td>
                          </Table.Tr>
                          <Table.Tr>
                            <Table.Td>2</Table.Td>
                            <Table.Td>Brad</Table.Td>
                            <Table.Td>Pitt</Table.Td>
                            <Table.Td>@bradpitt</Table.Td>
                          </Table.Tr>
                          <Table.Tr>
                            <Table.Td>3</Table.Td>
                            <Table.Td>Charlie</Table.Td>
                            <Table.Td>Hunnam</Table.Td>
                            <Table.Td>@charliehunnam</Table.Td>
                          </Table.Tr>
                        </Table.Tbody>
                      </Table>
                    </div>
                  </Preview>
                  <Source>
                    <Highlight>
                      {`
                <div className="overflow-x-auto">
                  <Table striped>
                    <Table.Thead>
                      <Table.Tr>
                        <Table.Th className="whitespace-nowrap">#</Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          First Name
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          Last Name
                        </Table.Th>
                        <Table.Th className="whitespace-nowrap">
                          Username
                        </Table.Th>
                      </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                      <Table.Tr>
                        <Table.Td>1</Table.Td>
                        <Table.Td>Angelina</Table.Td>
                        <Table.Td>Jolie</Table.Td>
                        <Table.Td>@angelinajolie</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>2</Table.Td>
                        <Table.Td>Brad</Table.Td>
                        <Table.Td>Pitt</Table.Td>
                        <Table.Td>@bradpitt</Table.Td>
                      </Table.Tr>
                      <Table.Tr>
                        <Table.Td>3</Table.Td>
                        <Table.Td>Charlie</Table.Td>
                        <Table.Td>Hunnam</Table.Td>
                        <Table.Td>@charliehunnam</Table.Td>
                      </Table.Tr>
                    </Table.Tbody>
                  </Table>
                </div>
                `}
                    </Highlight>
                  </Source>
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Striped Rows */}
        </div>
      </div>
    </>
  );
}

export default Main;
