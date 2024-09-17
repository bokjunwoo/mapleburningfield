import { useQuery } from '@tanstack/react-query';
import ocidServiceInstance from './OcidService';

const useOcid = (name: string) => {
  return useQuery({
    queryKey: [name],
    queryFn: () => ocidServiceInstance.getOcid(name),
    enabled: false,
  });
};

export default useOcid;
