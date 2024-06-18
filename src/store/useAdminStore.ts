/* eslint-disable @typescript-eslint/no-explicit-any */
import create from 'zustand';
import { persist } from 'zustand/middleware';

const useAdminStore = create(
  persist(
    (set) => ({
      sections: {},
      setSection: (sectionName:any, value:any) =>
        set((state:any) => ({
          sections: {
            ...state.sections,
            [sectionName]: value,
          },
        })),
    }),
    {
      name: 'admin-sections', // nama item di localStorage
    }
  )
);

export default useAdminStore;
