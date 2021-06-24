
import Authenticated from '@/Layouts/Authenticated';

const payrolls = [
    { title: 'Payroll 3', date: '27/03/2021', role: 'Apprentice web dev', doc: 'payroll-march.pdf' },
    { title: 'Payroll 2', date: '27/02/2021', role: 'Apprentice web dev', doc: 'payroll-feb.pdf' },
    { title: 'Payroll 1', date: '27/01/2021', role: 'Apprentice web dev', doc: 'payroll-jan.pdf' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
  
export default function Payrolls(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Payrolls</h2>}
        >
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="flex flex-col">
                                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                            <table className="min-w-full divide-y divide-gray-200">
                                                <thead className="bg-gray-50">
                                                    <tr>
                                                        <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        >
                                                        Title
                                                        </th>
                                                        <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        >
                                                        Date
                                                        </th>
                                                        <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        >
                                                        Role
                                                        </th>
                                                        <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                        >
                                                        Document
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                {payrolls.map((payroll, payrollIdx) => (
                                                    <tr key={payroll.title} className={payrollIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{payroll.title}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payroll.date}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payroll.role}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 underline">{payroll.doc}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Authenticated>
    )
}
  