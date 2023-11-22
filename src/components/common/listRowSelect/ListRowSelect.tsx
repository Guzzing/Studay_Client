import { forwardRef } from 'react'
import Icon from '@/components/common/icon/Icon'
import { SelectProps } from '@/components/common/inputbox/select/SelectType'
import ListRow from '@/components/common/listRow/ListRow'

type ListRowSelectProps<T> = {
  title: string
  values: number[] | string[]
} & SelectProps<T>

const ListRowSelect = forwardRef<HTMLSelectElement, ListRowSelectProps<string>>(
  (
    {
      title,
      options,
      values,
      placeholder,
      ...props
    }: Partial<ListRowSelectProps<string>>,
    ref
  ) => {
    return (
      <div
        className={
          'flex flex-row w-full border rounded-[10px] bg-white-200 border-blue-350  justify-between items-center'
        }>
        <ListRow
          paddingSize={'small'}
          hasBorder={false}
          rightElement={
            <div
              className={`relative flex flex-row justify-end w-auto items-center gap-[10px]`}>
              <select
                className={`font-nsk body-14 outline-none
      text-gray-600 appearance-none cursor-pointer bg-white-200 elative text-right w-full items-center px-[40px]`}
                {...props}
                ref={ref}
                defaultValue={''}>
                {placeholder && (
                  <option value={''} key={'default'}>
                    {placeholder}
                  </option>
                )}
                {options?.map((option, idx) => (
                  <option
                    value={values?.find((_, index) => index === idx)}
                    key={idx}>
                    {option}
                  </option>
                ))}
              </select>
              <div
                className={
                  'pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'
                }>
                <Icon icon={'ArrowDown'} classStyle={'text-gray-500'} />
              </div>
            </div>
          }
          leftElement={
            <div className={'flex items-center body-16 px-[10px]'}>{title}</div>
          }></ListRow>
      </div>
    )
  }
)

export default ListRowSelect
