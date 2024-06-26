'use client'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface Props {
  filters: {
    name: string,
    value: string
  }[],
  otherClasses?: string,
  containerClasses?: string
}

export default function Filter({filters, otherClasses, containerClasses} : Props){
  return <div className={`relative ${containerClasses}`}>    
    <Select>
      <SelectTrigger className={`${otherClasses} body-regular light-border background-light800_dark300 text-dark500_light700 border px-5 py-2.5`}>
        <div className="line-clamp-1 flex-1 text-left">
          <SelectValue placeholder="Select by Filter" />
        </div>
      </SelectTrigger>
      <SelectContent className="background-light850_dark100 text-dark500_light700">
        <SelectGroup>
          {filters.map((filter) => (
            <SelectItem className="hover:background-light900_dark200" key={filter.value} value={filter.value}>
              {filter.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
        
    </Select>
  </div>
}