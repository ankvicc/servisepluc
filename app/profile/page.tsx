'use client'
import { useAuth } from '../context/AuthContext'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { FiUser, FiMail, FiSettings, FiLogOut, FiEdit, FiPhone, FiSave } from 'react-icons/fi'
import LoginForm from '../components/LoginForm'

export default function ProfilePage() {
  const { user, isAuthenticated, logout, updateUser } = useAuth()
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [saveLoading, setSaveLoading] = useState(false)

  useEffect(() => {
    if (!isAuthenticated) {
      setLoading(false)
    } else if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || ''
      })
      fetchOrders(user.id)
      setLoading(false)
    }
  }, [isAuthenticated, router, user])

  const fetchOrders = async (userId) => {
    try {
      const response = await fetch(`/api/orders/${userId}`)
      const data = await response.json()
      setOrders(data)
    } catch (error) {
      console.error('Error fetching orders:', error)
    }
  }

  const handleSave = async () => {
    if (!user) return
    
    setSaveLoading(true)
    try {
      await updateUser({
        id: user.id,
        ...formData
      })
    } catch (error) {
      console.error('Update failed:', error)
    } finally {
      setSaveLoading(false)
    }
  }

  if (!isAuthenticated) {
    return <LoginForm onSuccess={() => setLoading(false)} />
  }

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Информация о пользователе */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6">Личные данные</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 mb-2">Имя</label>
              <input
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                value={formData.email}
                className="w-full p-2 border rounded bg-gray-100"
                readOnly
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Телефон</label>
              <input
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
          
          <button 
            onClick={handleSave}
            disabled={saveLoading}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:bg-blue-300 transition"
          >
            {saveLoading ? 'Сохранение...' : 'Сохранить изменения'}
          </button>
        </div>

        {/* Таблица заказов */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">Мои заказы</h2>
          
          {orders.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Номер заказа</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Дата</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Статус</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Сумма</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {orders.map((order) => (
                    <tr key={order.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        #{order.orderNumber}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${order.status === 'completed' ? 'bg-green-100 text-green-800' : 
                            order.status === 'processing' ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-red-100 text-red-800'}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {order.total.toFixed(2)} ₽
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              У вас пока нет заказов
            </div>
          )}
        </div>
      </div>
    </div>
  )
}