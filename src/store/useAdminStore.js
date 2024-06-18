import create from 'zustand';
import { persist } from 'zustand/middleware';

const useAdminStore = create(
  persist(
    (set) => ({
      sections: {},
      setSection: (sectionName, value) =>
        set((state) => ({
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
