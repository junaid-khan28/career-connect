
import { Navigation } from "@/components/Navigation";
import { PostJobForm } from "@/components/PostJobForm";
import { useAuth } from "@/hooks/useAuth";
import { AuthModal } from "@/components/AuthModal";
import { useState } from "react";

const PostJob = () => {
  const { user } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  if (!user) {
    return (
      <>
        <div className="min-h-screen bg-gray-50">
          <Navigation />
          <div className="max-w-4xl mx-auto px-4 py-16 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Post a Job</h1>
            <p className="text-gray-600 mb-8">Please sign in to post a job opening.</p>
            <button
              onClick={() => setShowAuthModal(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Sign In to Post Job
            </button>
          </div>
        </div>
        <AuthModal 
          isOpen={showAuthModal} 
          onClose={() => setShowAuthModal(false)} 
        />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Post a Job</h1>
          <p className="text-gray-600">Find the perfect candidates for your open positions.</p>
        </div>
        
        <PostJobForm />
      </div>
    </div>
  );
};

export default PostJob;
