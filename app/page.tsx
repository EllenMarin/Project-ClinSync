
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { getRole } from '@/utils/roles';
import { UserButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function Home() {
  const {userId} = await auth();
  const role = await getRole();

  if(userId && role){
    redirect(`/${role}`);
  }

  console.log(userId);
  // Redirect to dashboard on root path
  //redirect('/');
  return(
  <>
    <div className='flex flex-col items-center justify-center h-screen p-6'>
      <div className='flex-1 flex flex-col items-center justify-center'>
        <div className='mb-8'>
          <h1 className='text-4xl font-bold text-center '> Welcome to, <br />
           <span className='text-primary'>ClinSync</span>
          </h1>
        </div>
        <div className='text-center max-w-xl flex flex-col items-center justify-center'>
          <p> Here's an overview of your clinic. </p>
        </div>

         <div className='flex gap-4'>
           {
            userId ? (<>
              <Link href={`/${role}`}>
                <Button className='mt-4 bg-primary hover:bg-primary-foreground text-white hover:text-primary font-bold py-2 px-4 rounded'>Go to dashboard</Button>
              </Link>
              <UserButton />
            </>
            ):  
            <>
              <Link href="/sign-up">
                <Button className='mt-4 bg-primary hover:bg-primary-foreground text-white hover:text-primary font-bold py-2 px-4 rounded'>New Account</Button>
              </Link>
              <Link href="/sign-in">
                <Button variant="outline" className='border-primary mt-4 bg-white hover:bg-primary text-primary hover:text-white font-bold py-2 px-4 rounded'>Login to account</Button>
              </Link>
            </>
            
            }
         </div>
      </div>
      
    </div>
    <Footer />
    </>
  )
}