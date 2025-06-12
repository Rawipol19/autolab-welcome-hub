
import { ArrowLeft, Upload, Play, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const PdfPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-lg bg-red-500 flex items-center justify-center">
              <span className="text-white font-bold text-xl">.pdf</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">PDF Documents</h1>
              <p className="text-muted-foreground">Learn how to submit PDF document files</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="h-5 w-5" />
                How to Submit PDF Documents
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                PDF documents are commonly used for written assignments, reports, design documents, and theoretical work that accompanies programming projects.
              </p>
              
              <div className="space-y-3">
                <h4 className="font-semibold">Common Use Cases:</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Technical reports and documentation</li>
                  <li>Design specifications and architectural diagrams</li>
                  <li>Mathematical proofs and algorithm analysis</li>
                  <li>Project proposals and research papers</li>
                  <li>User manuals and API documentation</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">File Requirements:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Max 25MB</Badge>
                  <Badge variant="secondary">PDF/A compatible</Badge>
                  <Badge variant="secondary">Text-searchable</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="h-5 w-5" />
                Review Process
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h5 className="font-semibold">Document Validation</h5>
                    <p className="text-sm text-muted-foreground">Verify PDF integrity and ensure it can be opened and read</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h5 className="font-semibold">Content Analysis</h5>
                    <p className="text-sm text-muted-foreground">Extract and analyze text content for automated checking</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h5 className="font-semibold">Format Compliance</h5>
                    <p className="text-sm text-muted-foreground">Check document formatting against assignment requirements</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">4</div>
                  <div>
                    <h5 className="font-semibold">Instructor Review</h5>
                    <p className="text-sm text-muted-foreground">Forward to instructor for manual review and grading</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Best Practices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Use clear, readable fonts (minimum 11pt size)</li>
                <li>• Include proper headers, page numbers, and margins</li>
                <li>• Ensure all text is selectable (not scanned images)</li>
                <li>• Include your name and student ID on every page</li>
                <li>• Use high-quality images and diagrams</li>
                <li>• Save in PDF/A format for long-term compatibility</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PdfPage;
