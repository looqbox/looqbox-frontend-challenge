import { Typography } from 'antd'

import type { SectionProps } from './section.types'

import './section.css'

export function Section({ title, children }: SectionProps) {
  return (
    <section className='section'>
      <Typography.Title level={4} className='section__title'>
        {title}
      </Typography.Title>
      <div className='section__content'>{children}</div>
    </section>
  )
}
