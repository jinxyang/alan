import React, { useState } from 'react'

import Button from '../components/Button'
import Input from '../components/Input'
import Progress from '../components/Progress'
import Option from '../components/options/Option'
import OptGroup from '../components/options/OptGroup'
import Select from '../components/Select'

const Name: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState(0)

  const options = [
    { label: '俯卧撑', value: 0, disabled: true },
    { label: '深蹲', value: 1 },
    { label: '仰卧起坐', value: 2 },
    { label: '波比跳', value: 3, disabled: true },
    { label: '俯卧撑', value: 4 },
    { label: '深蹲', value: 5 },
    { label: '仰卧起坐', value: 6 },
    { label: '波比跳', value: 7 },
    { label: '俯卧撑', value: 8 },
    { label: '深蹲', value: 9 },
    { label: '仰卧起坐', value: 10 },
    { label: '波比跳', value: 11 },
    { label: '仰卧起坐', value: 12 },
    { label: '波比跳', value: 13 },
  ]

  const optGroups = [
    {
      label: 'basketball',
      options: [
        { label: '俯卧撑', value: 0, disabled: true },
        { label: '深蹲', value: 1 },
      ],
    },
    {
      label: 'football',
      options: [
        { label: '俯卧撑', value: 0, disabled: true },
        { label: '深蹲', value: 1 },
      ],
    },
  ]
  function handleChange(a, b) {
    console.log('a', a)
    console.log('b', b)
  }
  function handleInputChange(data) {
    console.log(data.target.value)
  }
  return (
    <>
      <div
        style={{
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: '20px',
          backgroundColor: '#ddd',
        }}
      >
        <Button
          type="primary"
          loading={loading}
          onClick={() => {
            console.log('按钮点击')
            setLoading(!loading)
          }}
        >
          primary
        </Button>
        <Button
          type="warn"
          size="small"
          disabled={!loading}
          onClick={() => {
            setLoading(false)
          }}
        >
          stop
        </Button>
        <Button type="warn" size="large" disabled>
          disabled
        </Button>
        <Button type="success" onClick={() => setStep(step + 13)}>
          addStep
        </Button>
        <Button type="warn" onClick={() => setStep(0)}>
          Reset
        </Button>
        <Button size="small">default</Button>
        <Button ghost size="large" type="warn" loading={loading}>
          ghost
        </Button>
        <Button
          ghost
          disabled={loading}
          onClick={() => {
            setLoading(false)
          }}
        >
          ghost default
        </Button>
        <Button type="primary">基础</Button>

        <Button ghost size="normal" type="success" disabled>
          ghost btn
        </Button>

        <Input />
      </div>
      <div
        style={{
          padding: '10px',
          backgroundColor: 'pink',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Input size="small" onChange={handleInputChange} />
        <Button type="success" size="small">
          提交
        </Button>
        <Input onChange={handleInputChange} />
        <Button type="success">提交</Button>
        <Input size="large" onChange={handleInputChange} />
        <Button type="success" size="large">
          提交
        </Button>
        <Select
          size="small"
          mode="multiple"
          allowClear
          value={[1, 2]}
          options={options}
        ></Select>
      </div>
      <Progress step={step} total={100} />
      <div style={{ display: 'flex' }}>
        <Select
          size="small"
          mode="multiple"
          allowClear
          value={[1, 2]}
          options={options}
        ></Select>
        <Select
          mode="multiple"
          allowClear
          onChange={handleChange}
          value={['1', '2']}
        >
          <Option value="1" label="success">
            ✅ complete successful!
          </Option>
          <Option value="2" label="fail">
            <div>❎ not complete!</div>
          </Option>
          <Option value="3">dw</Option>
        </Select>
      </div>
    </>
  )
}

export default Name
