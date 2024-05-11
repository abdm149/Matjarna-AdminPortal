import _ from "lodash";
import Button from "../../base-components/Button";
import Lucide from "../../base-components/Lucide";
import { Menu } from "../../base-components/Headless";
import Table from "../../base-components/Table";

function Main() {
  return (
    <>
      <div className="flex flex-col items-center mt-8 intro-y sm:flex-row">
        <h2 className="mr-auto text-lg font-medium">Invoice Layout</h2>
        <div className="flex w-full mt-4 sm:w-auto sm:mt-0">
          <Button variant="primary" className="mr-2 shadow-md">
            Print
          </Button>
          <Menu className="ml-auto sm:ml-0">
            <Menu.Button as={Button} className="px-2 !box">
              <span className="flex items-center justify-center w-5 h-5">
                <Lucide icon="Plus" className="w-4 h-4" />
              </span>
            </Menu.Button>
            <Menu.Items className="w-40">
              <Menu.Item>
                <Lucide icon="File" className="w-4 h-4 mr-2" /> Export Word
              </Menu.Item>
              <Menu.Item>
                <Lucide icon="File" className="w-4 h-4 mr-2" /> Export PDF
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </div>
      {/* BEGIN: Invoice */}
      <div className="mt-5 overflow-hidden intro-y box">
        <div className="flex flex-col px-5 pt-10 text-center lg:flex-row sm:px-20 sm:pt-20 lg:pb-20 sm:text-left">
          <div className="text-3xl font-semibold text-primary">INVOICE</div>
          <div className="mt-20 lg:mt-0 lg:ml-auto lg:text-right">
            <div className="text-xl font-medium text-primary">Left4code</div>
            <div className="mt-1">left4code@gmail.com</div>
            <div className="mt-1">8023 Amerige Street Harriman, NY 10926.</div>
          </div>
        </div>
        <div className="flex flex-col px-5 pt-10 pb-10 text-center border-b lg:flex-row sm:px-20 sm:pb-20 sm:text-left">
          <div>
            <div className="text-base text-slate-500">Client Details</div>
            <div className="mt-2 text-lg font-medium text-primary">
              Arnold Schwarzenegger
            </div>
            <div className="mt-1">arnodlschwarzenegger@gmail.com</div>
            <div className="mt-1">260 W. Storm Street New York, NY 10025.</div>
          </div>
          <div className="mt-10 lg:mt-0 lg:ml-auto lg:text-right">
            <div className="text-base text-slate-500">Receipt</div>
            <div className="mt-2 text-lg font-medium text-primary">
              #1923195
            </div>
            <div className="mt-1">Jan 02, 2021</div>
          </div>
        </div>
        <div className="px-5 py-10 sm:px-16 sm:py-20">
          <div className="overflow-x-auto">
            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th className="border-b-2 dark:border-darkmode-400 whitespace-nowrap">
                    DESCRIPTION
                  </Table.Th>
                  <Table.Th className="text-right border-b-2 dark:border-darkmode-400 whitespace-nowrap">
                    QTY
                  </Table.Th>
                  <Table.Th className="text-right border-b-2 dark:border-darkmode-400 whitespace-nowrap">
                    PRICE
                  </Table.Th>
                  <Table.Th className="text-right border-b-2 dark:border-darkmode-400 whitespace-nowrap">
                    SUBTOTAL
                  </Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                <Table.Tr>
                  <Table.Td className="border-b dark:border-darkmode-400">
                    <div className="font-medium whitespace-nowrap">
                      Midone HTML Admin Template
                    </div>
                    <div className="text-slate-500 text-sm mt-0.5 whitespace-nowrap">
                      Regular License
                    </div>
                  </Table.Td>
                  <Table.Td className="w-32 text-right border-b dark:border-darkmode-400">
                    2
                  </Table.Td>
                  <Table.Td className="w-32 text-right border-b dark:border-darkmode-400">
                    $25
                  </Table.Td>
                  <Table.Td className="w-32 font-medium text-right border-b dark:border-darkmode-400">
                    $50
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td className="border-b dark:border-darkmode-400">
                    <div className="font-medium whitespace-nowrap">
                      Vuejs Admin Template
                    </div>
                    <div className="text-slate-500 text-sm mt-0.5 whitespace-nowrap">
                      Regular License
                    </div>
                  </Table.Td>
                  <Table.Td className="w-32 text-right border-b dark:border-darkmode-400">
                    1
                  </Table.Td>
                  <Table.Td className="w-32 text-right border-b dark:border-darkmode-400">
                    $25
                  </Table.Td>
                  <Table.Td className="w-32 font-medium text-right border-b dark:border-darkmode-400">
                    $25
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td className="border-b dark:border-darkmode-400">
                    <div className="font-medium whitespace-nowrap">
                      React Admin Template
                    </div>
                    <div className="text-slate-500 text-sm mt-0.5 whitespace-nowrap">
                      Regular License
                    </div>
                  </Table.Td>
                  <Table.Td className="w-32 text-right border-b dark:border-darkmode-400">
                    1
                  </Table.Td>
                  <Table.Td className="w-32 text-right border-b dark:border-darkmode-400">
                    $25
                  </Table.Td>
                  <Table.Td className="w-32 font-medium text-right border-b dark:border-darkmode-400">
                    $25
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td>
                    <div className="font-medium whitespace-nowrap">
                      Laravel Admin Template
                    </div>
                    <div className="text-slate-500 text-sm mt-0.5 whitespace-nowrap">
                      Regular License
                    </div>
                  </Table.Td>
                  <Table.Td className="w-32 text-right">3</Table.Td>
                  <Table.Td className="w-32 text-right">$25</Table.Td>
                  <Table.Td className="w-32 font-medium text-right">
                    $75
                  </Table.Td>
                </Table.Tr>
              </Table.Tbody>
            </Table>
          </div>
        </div>
        <div className="flex flex-col-reverse px-5 pb-10 sm:px-20 sm:pb-20 sm:flex-row">
          <div className="mt-10 text-center sm:text-left sm:mt-0">
            <div className="text-base text-slate-500">Bank Transfer</div>
            <div className="mt-2 text-lg font-medium text-primary">
              Elon Musk
            </div>
            <div className="mt-1">Bank Account : 098347234832</div>
            <div className="mt-1">Code : LFT133243</div>
          </div>
          <div className="text-center sm:text-right sm:ml-auto">
            <div className="text-base text-slate-500">Total Amount</div>
            <div className="mt-2 text-xl font-medium text-primary">
              $20.600.00
            </div>
            <div className="mt-1">Taxes included</div>
          </div>
        </div>
      </div>
      {/* END: Invoice */}
    </>
  );
}

export default Main;
