import { ToastBar, Toaster } from 'react-hot-toast';

export const CustomToaster = () => {
  return (
    <Toaster
      toastOptions={{
        success: {
          iconTheme: {
            primary: '#08CD92',
            secondary: '#F1F2F6',
          },
          duration: 1500,
        },
        error: {
          iconTheme: {
            primary: '#D61C4E',
            secondary: '#F1F2F6',
          },
          duration: 1500,
        },
      }}
    >
      {(t) => (
        <ToastBar
          toast={t}
          style={{
            ...t.style,
            fontFamily: "'Quicksand', sans-serif",
            color: '#1C1B2B',
          }}
        />
      )}
    </Toaster>
  );
};
