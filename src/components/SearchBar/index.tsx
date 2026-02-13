import { CloseOutlined, SearchOutlined } from '@ant-design/icons'
import type { FormProps } from 'antd'
import { Button, Form, Input } from 'antd'
import { useAppDispatch } from '../../store'
import { searchByName } from '../../store/slices/pokemon'

type FieldType = {
  name: string
}

export function SearchBar() {
  const dispatch = useAppDispatch()

  const handleSearch = (name: string) => {
    dispatch(searchByName(name))
  }

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    handleSearch(values.name)
  }

  return (
    <div className='w-full flex! flex-col justify-center! items-center! gap-2'>
      <Form
        name='basic'
        style={{ width: '100%' }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete='off'
        className='w-full! md:w-[80%]! lg:w-[60%]! flex! justify-between! items-center! gap-2'
      >
        <Form.Item<FieldType>
          name='name'
          rules={[{ required: true, message: 'Please input pokemon name!' }]}
          className='flex-1! shadow! m-0!'
        >
          <Input placeholder='Pokemon name...' />
        </Form.Item>

        <Form.Item label={null} className='m-0!'>
          <Button type='primary' htmlType='submit' icon={<SearchOutlined />} />
        </Form.Item>
        <Form.Item label={null} className='m-0!'>
          <Button
            className='bg-red-500!'
            type='primary'
            htmlType='reset'
            icon={<CloseOutlined />}
            onClick={() => dispatch({ type: 'pokemons/resetSearch' })}
          />
        </Form.Item>
      </Form>

      <p className='text-gray-400 text-sm'>
        Search a Pokémon by name or browse the paginated list.
      </p>
    </div>
  )
}
